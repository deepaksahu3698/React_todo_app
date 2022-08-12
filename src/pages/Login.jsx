
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
            alert("Creat a new user")
          }
          dispatch(login(res.accessToken));
             navigate("/")
      })
      .catch((err) =>
             console.log(err)
      )


      
  }
  
  
//   React.useEffect(handleLogin,[])
  
  return (
    <div>
      <h1>LOGIN</h1>
      <label htmlFor="">User Email : </label>
      <input value={usrName} onChange={(e) => setUsrName(e.target.value)} placeholder="Enter user name" />
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
