import React from 'react'
import {EmployeeData} from './EmployeeData';
import { useState } from 'react';
import { useEffect } from 'react';

export default function App() {

const [data,setData] = useState([]);
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [age, setAge] = useState();
const [id, setId] = useState(0);
const [isupdate,setIsupdate] = useState(false);//This is for conditional rendering of update button

useEffect(() =>{
  setData(EmployeeData);
},[]);

const handleEdit =(editId) =>{
  // alert(editId);
  setIsupdate(true);
  const dt = data.filter(item => item.id === editId);
  if(dt!== undefined){
    setId(editId);
    setFirstName(dt[0].firstName);
    setLastName(dt[0].lastName);
    setAge(dt[0].age);
  }
}
const handleDelete =(removeId) =>{
  // alert(id);

  if(removeId >0){
    if(window.confirm("Are you sure yo want to delete")){

      const dt = data.filter(item => item.id !== removeId);
      setData(dt);

    }
  }
}

const handleSave = (e) =>{
  e.preventDefault();
  let error;
  if(firstName===''){
    error +='first name is require';
  }
  if(lastName===''){
    error +='last name is require';
  }
  if(age<=0){
    error +='age name is require';
  }

  if(error ==''){

    const  dt = [...data];
    const newObject = {
      id: EmployeeData.length+1,
      firstName: firstName,
      lastName: lastName,
      age: age
    }
    dt.push(newObject);
    setData(dt);
    // setData(dt,newObject);
  }
  else{
    alert(error);
  }
}

const handleUpdate = () =>{
  const index = data.map((item)=>{
    return (
       item.id
    )
  }).indexOf(id);
  // console.log(index);
  const dt = [...data];
  dt[index].firstName = firstName;
  dt[index].lastName = lastName;
  dt[index].age = age;
  setData(dt);
  handleClear();

}

const handleClear = () =>{
  setIsupdate(false);
  setId(0);
  setFirstName('');
  setLastName('');
  setAge('');
}
  return (
    <div>
      <div style={{display:'flex', justifyContent:'center', marginTop:'10px', marginBottom:'10px'}}>
          <div>
            <label htmlFor="">First Name :</label>
            <input type="text" placeholder='Enter First name' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="">Last Name :</label>
            <input type="text" placeholder='Enter Last name' value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="">Age :</label>
            <input type="text" placeholder='Enter Age' value={age} onChange={(e)=>setAge(e.target.value)}/>
          </div>
          <div>
            {
              !isupdate ?  
              <button className='btn btn-primary' onClick={(e) => handleSave(e)}>Save</button>
              :
              <button className='btn btn-primary' onClick={(e) => handleUpdate()}>Update</button>
            }
          <button className='btn btn-danger' onClick={(e) => handleClear()}>Clear</button>
          </div>
      </div>
        <table className='table table-hover'> 
          <thead>
            <tr>
              <td>Sr.no</td>
              <td>Id</td>
              <td>Firstname</td>
              <td>Lastname</td>
              <td>Age</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item,index) => {
                  return(
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{item.id}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.age}</td>
                      <td>
                        <button className='btn btn-primary' onClick={(e) => handleEdit(item.id)}>Edit</button>
                        <button className='btn btn-danger' onClick={(e) => handleDelete(item.id)}>Delete</button>
                      </td>
                    </tr>
                  )
              })
            }
          </tbody>
        </table>

    </div>
  )
}
