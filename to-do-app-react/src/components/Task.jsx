import React, { useEffect, useState } from 'react'
import './Task.css'


export const Task = ({input, setInput, allTask, setAllTask}) => {

    useEffect(() =>{
        localStorage.setItem("tasks", JSON.stringify(allTask));

    },[allTask]);

    useEffect(()=>{
         const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setAllTask(JSON.parse(savedTasks));
    }
    },[])

    const handleDelete = (indexToRemove) =>{
        // alert("Do you want to delete the task?");
        let answer = window.confirm("Do you want to Delete task?");
        if(answer){   
            let upadtedAllTask = allTask.filter((task, index) => index !== indexToRemove);
            setAllTask(upadtedAllTask); 
            console.log(upadtedAllTask);
        }
        console.log(answer);
        
        
    }

    const handleEdit = (indexToEdit) => {
        
        let answer = window.confirm("Do you want to Edit task?");
        if(answer){
                //This to bring the task in the input box
                let editTask = allTask.filter((task,index) => index === indexToEdit );
                setInput(editTask);
                
                //This to remove the task from all the task
                let upadtedAllTask = allTask.filter((task, index) => index !== indexToEdit);
                setAllTask(upadtedAllTask); 
            } 
    }

  return (
    <div className='container'>
        <h2 className='head'>YOUR TASKS:</h2>
        <div className='task'>
            <ul>
                {allTask.map((task,index)=>
                     <li key={index}>
                     <span>
                             <div className=''>
                                 <input type="checkbox" 
                                    // onChange={()=>handleCheckBox(index)}
                                    // checked={completedTask.includes(index)}
                                 />
                               {/* <span style={{textDecoration:completedTask.includes(index)?'line-through':'none'}}>{task}</span>  */}
                               {task}
                             </div>
                         <div className='buttons'>
                             <button onClick={()=>handleEdit(index)}><i class="fas fa-edit"></i></button>
                             <button onClick={() =>handleDelete(index)}><i class="fas fa-trash"></i></button>
                         </div>
                         </span>
                         
                     </li>
                )}
            </ul>
        </div>
    </div>
  )
}
