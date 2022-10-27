import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name : "todo",
    initialState : [
        {id: 1, text: 'ajouter votre nom', done:false  },
        {id: 2, text: 'ajouter votre adresse', done : true}
    ],
    reducers: {
        addTask : (state, action)=>{
            const newTask = {
                id: Date.now(),
                done : false,
                text : action.payload
            }
            state.push(newTask);
        },
        toggolTask : (state,action)=>{
            const task = state.find(t=>t.id ===action.payload)
            task.done = !task.done;
        }, 
       deleteTask : (state,action)=>{
        state = state.filter((t)=>t.id !== action.payload)
       return state   
    } 
        
        
    }
})
    export const  {addTask,toggolTask,deleteTask} = todoSlice.actions
export const store = configureStore ({
    reducer : {
        todo : todoSlice.reducer,
    }
});

