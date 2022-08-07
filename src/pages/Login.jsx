import React from "react";
import axios from "axios";

const initialState ={
    username: "",
    password: "",
}
const Login = () => {
    const [loginData,setLoginData] = React.useState(initialState);

    const handleChange = (e) =>{
        const {name , value} = e.target;
        setLoginData(prev =>(
            {...prev,[name] : value}
        ));
    }

    const handleLogin = (e) =>{
        Object.values(loginData).forEach(el => {
            let isValid = true;
            if(!el){
                isValid = false;
            }
            if(!isValid){
                return alert("Please fill all the fields");
            }
        })
        localStorage.setItem("userName_login",loginData.username)
        axios({
            method: "POST",
            url: "https://masai-api-mocker.herokuapp.com/auth/login",
            data : loginData
        }).then(res => {
            console.log(res)
            if(res.data.token){
                alert("Login successfully")
                localStorage.setItem("token_login",JSON.stringify(res.data.token))
            }
            else if(res.status==401){
                alert("Enter correct input")
            }
            
        }).catch(res =>{

        })
    }
    return(
        <div>
            {
            Object.keys(loginData).map(e =>(
                <div>
                    <label style={{"color":"black"}}>{e}</label>
                    <input key = {e} name = {e} onChange = {handleChange} value = {loginData[e]} type = "text" />
                </div>
            ))
            }
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login;