
import { ADDTODO,TOOGLE_SUB_TODO } from "./actionTypes";

export const addtodo=(payload)=>{
    return{
        type:ADDTODO,
        payload
    }
}
export const togglesubtodo=(payload)=>{
    return{
        type:TOOGLE_SUB_TODO,
        payload
    }
}