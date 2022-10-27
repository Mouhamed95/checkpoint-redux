import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteTask, toggolTask } from './Redux';



 const  TaskItem = (props) => {
 const {task} = props;
 const dispatch = useDispatch();
  
    return (
    <div>
     <label htmlFor="">
     <input 
     type="checkbox"
     checked = {task.done}
     onChange = {()=> dispatch(toggolTask(task.id) )} 
     />
     {task.text}
     <span
     onClick = {()=> dispatch(deleteTask(task.id))}
     role = 'button'
     style={{padding: "5px", marginLeft: "20px"}}
     >
        X
     </span>


     </label>


    </div>
  )
}
export default TaskItem