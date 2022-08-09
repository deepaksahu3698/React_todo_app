import { ADDTODO,TOOGLE_SUB_TODO } from "./actionTypes";

const initialState={
    todo:[]
}

export const todoreduser=(state=initialState,action)=>{
    switch(action.type){
        case ADDTODO:return{
            ...state,
            todos:[...state.todo,action.payload]
        }
        // case TOOGLE_SUB_TODO:return{
        //     ...state,
        //     todos:store.todos.map((e)=>
        //         e.id===action.payload?{...e,status:!e.status}:e
        //     )
        // }
        default:return{
            ...state
        }
    }
}