
import React from 'react'
import axios from "axios";

import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getProfile, login } from '../redux/auth/action'

const Login = () => {
  const [usrName,setUsrName] = React.useState("")
  const navigate = useNavigate()
  const [password, setPass] = React.useState("")
  const dispatch = useDispatch()
  // const token = useSelector(state => state?.token)
  let [token,setToken]=React.useState("")
  const handleLogin =async(usrName, password) => {
    const data = {
      username:usrName,
      password: password
    }
    console.log(data)
    // localStorage.setItem("Loginuser",JSON.stringify(usrName))
  await fetch(`https://www.mecallapi.com/api/login`, {
      method: "POST",
      mode:"cors",
      body: JSON.stringify(data),
      headers: {
        "content-Type": "application/json"
      }
    }).then((res) => res.json())
      .then((res) => {
          console.log(res)
          if(res.message=="Login failed"){
            alert("Token expired  please Create a new user")
            // navigate("/signup");
          
          }
          dispatch(login(res.accessToken));
          
  // setToken(res.accessToken)
  localStorage.setItem("token",res.accessToken)
      })
      .catch((err) =>
             console.log(err)
      )

      // const [profileData,setProfiledata]=React.useState([])
     
      user()

  }
  
 

  const user=async()=>{
    let token=localStorage.getItem("token")
    
    console.log(token)
    
   await fetch(` https://www.mecallapi.com/api/auth/user`,{
      method:"GET",
      mode:"cors",
            headers:{
          
              Authorization: `Bearer ${token}`
           }
    }).then((res) => res.json())
    .then((res) => {
    console.log(res.user)
        dispatch(getProfile(res.user));
        // setProfiledata(res.user)
        navigate("/")
          
    })
    .catch((err) =>
           console.log(err)
    )
  }
 

//  React.useEffect(()=>{
  
//  },[])
    
  
//   React.useEffect(handleLogin,[])
  
  return (
    <div>
      <h1>LOGIN</h1>
      <label htmlFor="">User Email : </label>
      <input value={usrName} onChange={(e) => setUsrName(e.target.value)} placeholder="Enter user Email" />
      <br />
      <br />
      <label htmlFor="">Password : </label>
      <input value={password} onChange={(e) => setPass(e.target.value)} placeholder="Enter password" type="password" /> 
      <br />
      <br />
      <button onClick={() => handleLogin(usrName, password)}>LOGIN</button> <br /><br />
    </div>
  )
}

export default Login
