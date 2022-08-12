
import { ADDTODO,TOOGLE_SUB_TODO,INC_OFFICIAL,INC_PERSONAL,INC_OTHER,INC_ALL, INC_TODO, INC_DONE, INC_IN_PROGRESS } from "./actionTypes";

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
export const incall=(payload)=>{
    return{
        type:INC_ALL,
        payload
    }

}
export const incpersonal=(payload)=>{
    return{
        type:INC_PERSONAL,
        payload
    }

}

export const incofficial=(payload)=>{
    return{
        type:INC_OFFICIAL,
        payload
    }

}

export const incother=(payload)=>{
    return{
        type:INC_OTHER,
        payload
    }

}
export const inctodo=(payload)=>{
    return{
        type:INC_TODO,
        payload
    }

}
export const incdone=(payload)=>{
    return{
        type:INC_DONE,
        payload
    }

}
export const incprogress=(payload)=>{
    return{
        type:INC_IN_PROGRESS,
        payload
    }

}