
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
//   const token = useSelector(state => state?.token)

  const handleLogin =(usrName, password) => {
    const data = {
      username:usrName,
      password: password
    }
    localStorage.setItem("Loginuser",JSON.stringify(usrName))
  fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
      method: "POST",
      mode:"no-cors",
      body: JSON.stringify(data),
      headers: {
        "content-Type": "application/json"
      }
    }).then((res) => res.json())
      .then((res) => {
          console.log(res)
          dispatch(login(res.token));
              navigate('/');
      })
      .catch((err) =>
             console.log(err)
      )
// try {
//   let res= await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`,{
//     method: "POST",
//           mode:"no-cors",
//           body: JSON.stringify(data),
//           headers: {
//             "content-Type": "application/json"
//           }
//   })
//   let dataa=await res.json()
//   console.log(dataa)      
//       dispatch(login(dataa.token));     
//    navigate('/');
// } catch (error) {
  
// }

      
  }
  
//   React.useEffect(handleLogin,[])
  
  return (
    <div>
      <h1>LOGIN</h1>
      <label htmlFor="">User Name : </label>
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
