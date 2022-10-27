import React from 'react'
import { useSelector } from 'react-redux';




const  TasksHeader =  () => {
  const tasks = useSelector (state => state.todo);
  const undoneTasks = tasks.filter((t)=> t.done === false)
  
    return (
    <header>
      <h1> TODO LIST </h1>
      <p> 
        Tache à faire : <strong> {undoneTasks.length} </strong>
      </p>
    </header>
  )
}
export default TasksHeader;
