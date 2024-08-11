import React, { useState } from 'react'
import './Task.css'


export const Task = ({allTask, setAllTask}) => {
    // const [completedTask, setCompletedTask] = useState(false);

    // const handleCheckBox = (index) =>{
    //         if(completedTask.includes(index)){
    //             setCompletedTask(completedTask.filter(taskIndex => taskIndex !==index));
    //         }else{
    //             setCompletedTask([...completedTask, index]);
    //         }
    const handleDelete = (indexToRemove) =>{
        let upadtedAllTask = allTask.filter((task, index) => index !== indexToRemove);
        setAllTask(upadtedAllTask); 
        console.log(upadtedAllTask);
        
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
                             <button><i class="fas fa-edit"></i></button>
                             <button onClick={() =>handleDelete(index)}><i class="fas fa-trash"></i></button>
                         </div>
                         </span>
                         
                     </li>
                )}
                {/* <li>
                <span>
                        <div className=''>
                            <input type="checkbox" />
                            Get shit done
                        </div>
                    <div className='buttons'>
                        <button><i class="fas fa-edit"></i></button>
                        <button><i class="fas fa-trash"></i></button>
                    </div>
                    </span>
                    
                </li> */}
             
            </ul>
            {/* <li>Do epic shit</li> */}
        </div>
    </div>
  )
}
