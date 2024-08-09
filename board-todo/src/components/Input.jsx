import React, { useState } from 'react'

const Input = ({taskList,setTaskList}) => {
    const [input, setInput] =  useState("");
    console.log(input);
    
    
    const handleAddTask = (e) =>{
            e.preventDefault();
            setTaskList([...taskList, input]);
            setInput("");
    }

  return (
    <div>
        <form className='flex flex-row intems-center gap-3'>
            <input 
            className='border rounder px-2'
            type="text" 
            placeholder='Add a text'
            value={input}
            onChange={(e)=>{setInput(e.target.value)}}
            />

            <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={handleAddTask}>Add</button>
        </form>
    </div>
  )
}

export default Input