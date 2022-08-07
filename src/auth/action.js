

export const signup = (payload) =>{
    return{
        type : SIGNUP_SUCCESS,
        payload
    };
}


export const login = (payload) =>{
    return{
        type : LOGIN_SUCCESS,
        payload
    };
}