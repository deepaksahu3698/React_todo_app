import { ADDTODO,TOOGLE_SUB_TODO,INC_OFFICIAL,INC_PERSONAL,INC_OTHER, INC_ALL,INC_TODO,INC_IN_PROGRESS,INC_DONE } from "./actionTypes";
import { store } from "../store";

const initialState={

    todo:[],
    all:0,
    personal:0,
    official:0,
    other:0,
    todo_count:0,
    done:0,
    progress:0

}

export const todoreduser=(state=initialState,action)=>{
    switch(action.type){
        case ADDTODO:return{
            ...state,
            todo:[...state.todo,action.payload]
        }
        case TOOGLE_SUB_TODO:return{
            ...state,
            todo:state.todo.map((e)=>
            e.subTask.map((el)=>{
//  el.id===action.payload?{...el,status:!el.status}:el
            })
                
            )
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
        default:return{
            ...state
        }
    }
}