import { SIGNUP_SUCCESS ,LOGIN_SUCCESS } from './actionTypes';

const initialState = {
    loading : false,
    error : false,
    token : null,
    message : ""
}

export const reducer = (state = initialState , {type , payload}) =>{
    switch(type){
        
        case SIGNUP_SUCCESS:
            return {
                ...state,
                loading : false,
                error : false,
            }
        
        
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading : false,
                error : false,
            }
       
        default :
            return state;
    }
}