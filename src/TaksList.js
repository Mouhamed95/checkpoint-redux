import React from 'react'
import { useSelector } from 'react-redux'
import TasksItem from './TasksItem'



const  TaskList = () => {
 const tasks = useSelector ((state) => state.todo);
 
  return (
    <div>
      {tasks.map((t)=>(
        <TasksItem
        task = {t}
        key = {t.id}  
        />
      ))}
    </div>
  )
}
export default TaskList; 
