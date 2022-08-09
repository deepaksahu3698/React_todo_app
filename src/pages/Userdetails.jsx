import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getProfile, login } from '../redux/auth/action'
const Userdetails= ()=>{
const dispatch=useDispatch
    const token = useSelector(state => state?.token)
 let username=JSON.parse (localStorage.getItem("Loginuser"))
 
console.log(token)
const user= async()=>{
    console.log(token)
    // try {
    //   let res= await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
    //      method:"GET",
    //   mode:"no-cors",
    //      headers:{
        
    //        Authorization: `Bearer 49b032d1552a1d15f799ddbc96e8ad11`
    //      }
    //    })
    //    let data=await res.json()
    //    console.log(data)
    //    dispatch(getProfile(data))

    // } catch (error) {
    //   console.log(error)
    // }
    fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
      method:"GET",
      mode:"no-cors",
            headers:{
          
              Authorization: `Bearer ${token}`
           }
    }).then((res) => res.json())
    .then((res) => {
        console.log(res)
        dispatch(getProfile(data));
            // navigate('/');
    })
    .catch((err) =>
           console.log(err)
    )

   
        

    }
    user()

    return(<>
    
    </>)
 }

 export default Userdetails