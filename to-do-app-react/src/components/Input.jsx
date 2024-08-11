import React, { useState } from 'react'
import './Input.css'

export const Input = ({allTask,setAllTask}) => {
    const [input, setInput] = useState("");

    const handleChange = (e) =>{
            let task = e.target.value;
            setInput(task);
            console.log(input);
            
    }

    const handleAdd = () =>{
        setAllTask([...allTask, input]);
        setInput("");
        console.log(allTask);
        
    }

  return (

    <div className='input-field'>
      <input type="text" 
      placeholder='Enter your task'
      className='input'
      value={input}
      onChange={handleChange}
      />
      <button className='btn-add' onClick={handleAdd}>+</button>
    </div>
    
  )
}
