import axios from "axios";
import React from "react";
import {useNavigate} from "react-router-dom"

const start ={
    name: "",
    email: "",
    password: "",
    username: "",
    mobile: "",
    description: ""
}
const Signup = () => {
    const [userData, setuserData] = React.useState(start);
const navigate=useNavigate()
    const handleChange = (e) =>{
        const {name , value} = e.target;
        setuserData(prev =>(
            { ...prev, [name] : value}
        ));
    }

    const handleSignup = () =>{
        let isValid = true;
        Object.values(userData).forEach(e => {
            if(!e){
                isValid = false;
            }
            if(!isValid){
                alert("Please fill all the fields");
                return;
            }
        })
 
        axios({
            method: "post",
            url: "https://masai-api-mocker.herokuapp.com/auth/register",
            data : userData
        }).then(res => {
            console.log(res.data.message)
            if(res.data.message=="Registration Success"){
alert("Registation sucessful")
                navigate("/login")
            }
            else if(res.data.message=="Registration failed, user already exists"){
                alert("User already exit please login")
                navigate("/login")
            }
            
        }).catch(res =>{

        })
    }
    return(
        <div  >
            {Object.keys(userData).map(e =>(
                <div style={{"margin-top":"10px"}}>
                     <label style={{"color":"black"}}>{e}</label>
                    <input name = {e} key ={e} value = {userData[e]} type = "text" onChange = {handleChange} />
                </div>
            ))}
            <button onClick={handleSignup}>Sign Up</button>
        </div>
    )
}

export default Signup;

/*
{
  "name": "MASAI School",
  "email": "hello@masai.com"
  "password": "secret",
  "username": "masai-school",
  "mobile": "9876543210",
  "description": "A Transformation in education!" 
}
*/