import React from 'react'


import { useNavigate } from 'react-router-dom'
import { signup } from '../redux/auth/action'
import { useDispatch } from 'react-redux'

const Signup = () => {
    const [name,setName] = React.useState("")
    const [email,setEmail] =React.useState("")
    const [password,setPass] = React.useState("")
    const [userName,setUsrName] = React.useState("")
    const [mobile,setMobile] = React.useState("")
    const [description,setDesc] = React.useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSignup = (name,email,password,userName,mobile,description) => {
        const data = {
            name,
            email,
            password ,
            username:userName,
            mobile,
            description
        }
        fetch(`https://masai-api-mocker.herokuapp.com/auth/register`,{
            method:"POST",
            body: JSON.stringify(data),
            headers:{
                "content-Type" : "application/json"
            }
        }).then((res) => res.json())
        .then((res) => {
            dispatch(signup());
            navigate('/login');
        })
        .catch((err) => console.log(err))
    }
    
  return (
    <div>
        <br/>
        <br/>
        <label htmlFor="">Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)}  placeholder="Enter Name"  />
        <br/>
        <br/>
        <label htmlFor="">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Enter Email"  />
        <br/>
        <br/>
        <label htmlFor="">Password</label>
        <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter Password"  />
        <br/>
        <br/>
        <label htmlFor="">User name</label>
        <input value={userName} onChange={(e) => setUsrName(e.target.value)}  placeholder="Enter User_Name"  />
        <br/>
        <br/>
        <label htmlFor="">Mobile</label>
        <input value={mobile} onChange={(e) => setMobile(e.target.value)}  placeholder="Enter Mobile"  />
        <br/>
        <br/>
        <label htmlFor="">Dec</label>
        <input value={description} onChange={(e) => setDesc(e.target.value)}  placeholder="Enter Description"/>
        <br/>
        <br/>
        <button onClick={() => handleSignup(name,email,password,userName,mobile,description)} >SIGNUP</button>
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