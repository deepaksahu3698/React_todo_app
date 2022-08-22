import { GET_PROFILE, LOGIN, LOGOUT, SIGNUP,REGISTER_SUCCESS } from "./actionTypes"

export const signup = (payload) => {
    return {
        type: SIGNUP,
        payload
    }
}
// export const login = (payload) => {
//     return {
//         type: LOGIN,
//         payload
//     }
// }
// export const getProfile = (payload) => {
//     return {
//         type: GET_PROFILE,
//         payload
//     }
// } 
export const logout = () => {
    localStorage.clear()
    return{
      type: LOGOUT,
    }
 
} 
const API_URL = "https://masai-api-mocker.herokuapp.com/"

export const Register = (data) => async(dispatch) => {
    const payload = {
        "name": data.name, 
        "email": data.email,
        "password": data.password,
        "username": data.username, 
        "mobile": data.mobile, 
        "description": data.description
    }

    if(data.username == "") return
    try {
        let res = await fetch( API_URL + "auth/register", {
            method: "POST", 
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json"
            }
        })
        let data1 = await res.json()
        console.log(data1)
        if(data1.message == "Registration Success"){
            dispatch(REGISTER_SUCCESS)
        }
        if(data1.message == "Registration failed, user already exists"){
            alert("User already exist. please login.")
        }

    } catch (error) {
        // dispatch(REGISTER_FAIL)
        // alert("Try again")
        console.log(error)
    }

}

export const login = (username, password) => async(dispatch) => {
    const payload = {
      "username": username,
      "password": password,
    };
    try {
      let res = await fetch( API_URL + "auth/login", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        }
      });
      
      let data = await res.json();
      console.log(data);
      if (data.token) {
         dispatch({
            type:LOGIN,
            payload:data.token
         })
          localStorage.setItem("usertoken", data.token);
        }
        // getProfile()
    } catch (error) {
      console.log(error);
    //   dispatch(LOGIN_FAIL)
    //   alert("Invalid login credentials");
    }

  };
  export const getProfile=(username)=>async(dispatch)=>{

    let token=localStorage.getItem("usertoken")
    //   console.log(token)
      try {
        console.log(username)
       
        // let token=JSON.parse(window.localStorage.getItem("token"))
        // console.log(token)
        let res=await fetch(API_URL+"user/"+username,{
            method:"GET",
            // mode:"cors",
            headers:{
                "Authorization":"Bearer "+token
            }
        })
        let data=await res.json()
        console.log(data)
        if(data){

       
        dispatch({
            type:GET_PROFILE,
            payload:data
        })
    }
    } catch (error) {
        // console.log(error)
    }
};