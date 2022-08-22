import React from 'react'


import { useNavigate } from 'react-router-dom'
import { signup } from '../redux/auth/action'
import { useDispatch } from 'react-redux'
import { Register } from '../redux/auth/action'
const initialState = {
    "name": "",
    "email": "", 
    "password": "", 
    "username": "", 
    "mobile": "", 
    "description": "", 
}

const Signup = () => {
    
   const[user,setUser]=React.useState(initialState)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleChange = (e) => {
        let {name, value} = e.target
        setUser({ ...user, [name]: value })
    }
    let {name, email, password, username, mobile, description} = user
    const handleClick = () => {
        // console.log(user)
        dispatch(Register(user))
        navigate("/login")
    }
  return (
    <div>
        <br/>
        <br/>
        <label htmlFor="">Name</label>
        <input value={name} name="name" onChange={handleChange}  placeholder="Enter First Name"  />
        <br/>
        <br/>
        <label htmlFor="">Email</label>
        <input value={email} name="email" onChange={handleChange}  placeholder="Enter Email"  />
        <br/>
         <br/>
        <label htmlFor="">User name</label>
        <input value={username} name="username" onChange={handleChange}  placeholder="Enter User_Name"  />
        <br/>
        <br/>
        <label htmlFor="">Password</label>
        <input  value={password} name="password" onChange={handleChange} type="password" placeholder="Enter Password"  />
        <br/>
        <br/>
        <label htmlFor="">Mobile</label>
        <input value={mobile} name="mobile" onChange={handleChange}  placeholder="Enter Mobile Number"  />
        <br/>
        <br/>
        <label htmlFor="">Description</label>
        <input value={description} name="description" onChange={handleChange}  placeholder="Enter Description"  />
        <br/>
       
        
        <br/>
        <button onClick={handleClick} >SIGNUP</button>
    </div>
  )
}

export default Signup

// "name": "MASAI School",
//   "email": "hello@masai.com"
//   "password": "secret",
//   "username": "masai-school",
//   "mobile": "9876543210",
//   "description": "A Transformation in education!" 