import { Button, Checkbox, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, TextareaAutosize, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { logout } from '../redux/auth/action'
// import SubTask from './SubTask'
import "./summary.css"
import { addtodo,incofficial,incother,incpersonal,togglesubtodo,cleartodo } from '../redux/todo/action'

const Summary = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()



 
  const profileData = useSelector(state => state?.auth.profile)
  const token = useSelector(state => state?.auth.token)

  useEffect(() => {
    (!profileData) ? <Navigate to='/login' /> : console.log(profileData)
    //  handleFetch();
  }, [])

//   console.log(title,state,tag ,desc)

  const handleLogout = () => {
    dispatch(logout())
    dispatch(cleartodo())
    navigate('/signup')
  }
 
//   console.log(tododata)


    const all=useSelector(state =>state?.todo.all)
    const personal=useSelector(state =>state?.todo.personal)
    const official=useSelector(state =>state?.todo.official)
    const other=useSelector(state =>state?.todo.other)
    const done=useSelector(state =>state?.todo.done)
    const todo_count=useSelector(state =>state?.todo.todo_count)
    const progress=useSelector(state =>state?.todo.progress)

  return (
    (!token) ? <Navigate to='/login' /> : <div className='addtodocontainer'>
      <div className='profile_div'>
      
      <div className='profile' style={{border:"2px solid teal"}}>
        <div style={{backgroundColor:"teal"}}>
          <h2>User Details</h2>
        </div>
        <hr />
        <div>
            <div><h3>Name -{`${profileData.name}`}</h3></div>
            <div><h3> Email -{`${profileData.email}`}</h3></div>
            <div><h3>User name -{`${profileData.username}`}</h3></div>
            <div><h3>Mobile -{`${profileData.mobile}`}</h3></div>
            <div><h3>Description -{`${profileData.description}`}</h3></div>
          </div>

       <div className='count_number'>
          <div className='count_all'>
            <h3>All</h3>
            <h3>{all}</h3>
          </div>
            <div className='count_personal'>
              <h3>
                Personal
              </h3>
              <h3>{personal}</h3>
            </div>
            <div className='count_official'>
              <h3>Ofricial</h3>
              <h3>{official}</h3>
            </div>
            <div className='count_other'>
              <h3>Others</h3>
              <h3>{other}</h3>
            </div>

          </div>
          <div>
            <button className='logout_button' onClick={() => handleLogout()} variant="contained">LOGOUT</button>
          </div>
      </div>
    </div>
<div className='entry_container'>
<div className='count_todo_cont'>

<div className=''>
              <h3>SUMMARY</h3>
           
            </div>
          <div className='count_todo'>
            <h3>TODO</h3>
            <h3>{todo_count}</h3>
          </div>
            <div className='count_done'>
              <h3>
                DONE
              </h3>
              <h3>{done}</h3>
            </div>
            <div className='count_progress'>
              <h3>IN PROGRESS</h3>
              <h3>{progress}</h3>
            </div>
            

          </div>

</div>
    </div>
    
  )
}

export default Summary

