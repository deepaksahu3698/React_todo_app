import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getProfile, login } from '../redux/auth/action'
const Userdetails= ()=>{
const dispatch=useDispatch()
    const token = useSelector(state => state?.auth.token)
 let username=JSON.parse (localStorage.getItem("Loginuser"))
 const navigate=useNavigate()
// console.log(token)(add)

const user=async ()=>{
    // console.log(token)
    // 
 await fetch(` https://www.mecallapi.com/api/auth/user`,{
      method:"GET",
      mode:"cors",
            headers:{
          
              Authorization: `Bearer ${token}`
           }
    }).then((res) => res.json())
    .then((res) => {
    
        dispatch(getProfile(res.user));
     
          
    })
    .catch((err) =>
           console.log(err)
    )

   
        

    return(<></>)
    }
}
  
   

    
 
 export default Userdetails