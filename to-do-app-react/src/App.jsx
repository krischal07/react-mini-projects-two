import React, { useState } from 'react'
import './App.css'
import { Input } from './components/Input'
import { Task } from './components/Task'

export default function App() {
  const [allTask, setAllTask] = useState([]);
  const [input, setInput] = useState("");

  return (
  <>
    <h1 className='heading'>ToDo List<span className='underline'>__</span><i class="fa fa-camera-retro fa-lg"></i></h1>

    <Input input={input} setInput={setInput} allTask={allTask} setAllTask={setAllTask}/>
    <Task input={input} setInput={setInput} allTask={allTask} setAllTask={setAllTask}/>
  </>
  )
}
