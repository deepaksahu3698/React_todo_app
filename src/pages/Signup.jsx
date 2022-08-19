import React from 'react'


import { useNavigate } from 'react-router-dom'
import { signup } from '../redux/auth/action'
import { useDispatch } from 'react-redux'

const Signup = () => {
    const [fname,setFName] = React.useState("")
    const [lname,setLName] = React.useState("")
    const [userName,setUsrName] = React.useState("")
    const [password,setPass] = React.useState("")
    const [email,setEmail] =React.useState("")
   
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSignup =async (fname,lname,userName,password,email) => {
        const data = {
            fname,
            lname,
            username:userName,
            password ,
            email,
            avatar: "https://www.mecallapi.com/users/cat.png"
            
        }
        console.log(data)
      await fetch(`https://www.mecallapi.com/api/users/create`,{
            method:"POST",
            body: JSON.stringify(data),
            headers:{
                "content-Type" : "application/json"
            }
        }).then((res) => res.json())
        .then((res) => {
            // dispatch(signup());
            navigate('/login');
        })
        .catch((err) => console.log(err))
    }
    
  return (
    <div>
        <br/>
        <br/>
        <label htmlFor="">First-Name</label>
        <input value={fname} onChange={(e) => setFName(e.target.value)}  placeholder="Enter First Name"  />
        <br/>
        <br/>
        <label htmlFor="">Last-Name</label>
        <input value={lname} onChange={(e) => setLName(e.target.value)}  placeholder="Enter Last Name"  />
        <br/>
        <br/>
        <label htmlFor="">User name</label>
        <input value={userName} onChange={(e) => setUsrName(e.target.value)}  placeholder="Enter User_Name"  />
        <br/>
        <br/>
        <label htmlFor="">Password</label>
        <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter Password"  />
        <br/>
        <br/>
        <label htmlFor="">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Enter Email"  />
        <br/>
        
        <br/>
        <button onClick={() => handleSignup(fname,lname,email,password,userName)} >SIGNUP</button>
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