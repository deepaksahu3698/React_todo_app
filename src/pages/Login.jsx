
import React from 'react'
import axios from "axios";

import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getProfile,login } from '../redux/auth/action'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [username,setUsreName] = React.useState("")
  const [password, setPassword] = React.useState("")
  // const token = useSelector(state => state?.token)
 
  const handleclick =(event) => {
    event.preventDefault();
    setdata()
  }
  
 const setdata=async()=>{
  localStorage.setItem("username",username)
  dispatch(login(username, password))
  
  dispatch(getProfile(username))
  
  navigate("/")
 }
//  React.useEffect(()=>{
//   setdata()
//  },[])
  
  return (
    
    <div>
      <form  onSubmit={handleclick}>
      <h1>LOGIN</h1>
      <label htmlFor="">Username : </label>
      <input value={username} onChange={(e) => setUsreName(e.target.value)} placeholder="Enter username" />
      <br />
      <br />
      <label htmlFor="">Password : </label>
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" type="password" /> 
      <br />
      <br />
      <button type='submit' >LOGIN</button> <br /><br />
    </form>
    </div>
  )
}

export default Login
