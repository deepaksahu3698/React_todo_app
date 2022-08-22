import { ADDTODO,TOOGLE_TODO,INC_OFFICIAL,INC_PERSONAL,INC_OTHER, INC_ALL,INC_TODO,INC_IN_PROGRESS,INC_DONE,DELETE_ALL_TODO, OBJECT_ID } from "./actionTypes";
import { store } from "../store";

const initialState={

    todo:[],
    all:0,
    personal:0,
    official:0,
    other:0,
    todo_count:0,
    done:0,
    progress:0,
    objectid:""


}

export const todoreduser=(state=initialState,action)=>{
    switch(action.type){
        case ADDTODO:return{
            ...state,
            todo:[...state.todo,action.payload]
        }
        case TOOGLE_TODO:return{
            ...state,
            todo:state.todo.filter((e=>
           
               e.id!==action.payload
        
           
                
            ))
        
        }
        case OBJECT_ID:return{
            ...state,
            objectid:action.payload
        }
        case INC_ALL:return{
            ... state,
            all:state.all+action.payload
        }
        case INC_OFFICIAL:return{
            ... state,
            official:state.official+action.payload
        }
        case INC_PERSONAL:return{
            ... state,
            personal:state.personal+action.payload

        }
        case INC_OTHER:return{
            ... state,
            other:state.other+action.payload

        }
        case INC_TODO:return{
            ... state,
            todo_count:state.todo_count+action.payload
        }
        case INC_DONE:return{
            ... state,
            done:state.done+action.payload
        }
        case INC_IN_PROGRESS:return{
            ... state,
            progress:state.progress+action.payload
        }
        case DELETE_ALL_TODO:return{
            state:initialState
        }
        default:return{
            ...state
        }
    }
}