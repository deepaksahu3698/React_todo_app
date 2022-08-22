import { Button, Checkbox, FormControlLabel } from '@mui/material'
import React from 'react'
import "./Home.css";
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 
'react-router-dom'
import { getProfile, login } from '../redux/auth/action'
import { logout } from '../redux/auth/action'
import Userdetails from './Userdetails';
import  {TodoContext} from "./addtodo"
import { useContext } from "react";
import { addtodo,cleartodo,togglesubtodo,objectid } from '../redux/todo/action'
const Home = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
 

    

  //  console.log(profileData)
    // const profileData = useSelector(state => state?.auth.profile)

  // React.useEffect(() => {
  //   (!token) ? <Navigate to='/login' /> :
  //   handleFetch()
  // }, [])
  
  const handleLogout = () => {
    dispatch(logout())
    dispatch(cleartodo())
    navigate('/signup')
  }
//   const base_url=process.env.REACT_APP_BASE_URL
  // const handleFetch = () => {
  //   fetch(`https://advtododb.herokuapp.com/tasks`).then((res) => res.json()).then((res) => setData(res))
  // }
  const token = useSelector(state => state?.auth.token)
  const profileData = useSelector(state => state?.auth.profile)
  console.log(profileData)
  const tododataa = useSelector(state => state?.todo.todo)
  const [tododata, setData] = React.useState(tododataa)
  console.log(tododata)
 
  const all=useSelector(state =>state?.todo.all)
  const personal=useSelector(state =>state?.todo.personal)
  const official=useSelector(state =>state?.todo.official)
  const other=useSelector(state =>state?.todo.other)

  // setData(tododata_redux)
  
//   data.forEach((e)=>{
// if(e.tag=="other"){
//     setother(other+1)
// }
// else if(e.tag=="personal"){
//     Setpersonal(personal+1)
// }
// else if(e.tag=="official"){
//     setOfficial(official+1)
// }
//   })
//   console.log(all)

const toggle=(ids,ido)=>{
  let newtodo=tododata.map(e => {
    
     return{...e,subTask:e.subTask.map(el=>{
if(el.id===ids){
  return{...el,status:!el.status}
  // console.log(!el.status)
}
else{
  return el
}
      })
    }
    
    
  })
  console.log(newtodo)
  // dispatch(cleartodo())
  // for(let i=0;i<newtodo.length;i++){
    // }
    // dispatch(addtodo(newtodo))
  setData(newtodo)
   
}
const gotoedit=(id)=>{
  localStorage.setItem("todoid",id)
  dispatch(objectid(id))
  navigate("/edittodo")
}

  return (
    (!token) ? <Navigate to='/login' /> : <div className='container_home'>
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
    
<div className="todo" >
      <div style={{border:"2px solid blue"}}>
        <div style={{backgroundColor:"blue"}}>
          <h2 >Todo</h2>
        <hr />
        </div>
        <div>
          {
            tododata.map((el) => el.state == "todo" ?
              <div style={{ border: "1px solid black", margin: "auto", marginBottom: "10px", width: "70%" }}>
                <h4 style={{ border: "1px solid #cecece", width: "70%", margin: "auto" }}>{el.tag}</h4>
                <h1>{el.title}</h1>
                <p>{el.description}</p>
                <h5>Sub-Task</h5>
                {
                  el.subTask.map((e) => (
                    <div key={e.id} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between",marginLeft:"10px", marginRight:"10px"}} >
                        <p>{e.title}</p>
                        <input type="checkbox" name="" id="" onChange={()=>toggle(e.id,el.id)} checked={e.status}/>
                     
                      
                    </div>
                  ))
                }
                <button onClick={()=>gotoedit(el.id)}>Edit task</button>
              </div> : console.log())
          }
        </div>
      </div>
      </div>

<div className="todo_progress">
          <div style={{border:"2px solid yellow"}}>
        <div style={{backgroundColor:"yellow"}}>
          <h2>Progress</h2>
          <hr />
        </div>
        <div>
        {
            tododata.map((el) => el.state === "inProgress" ?
              <div style={{ border: "1px solid black", margin: "auto", marginBottom: "10px", width: "70%" }}>
                <h3 style={{ border: "1px solid #cecece", width: "70%", margin: "auto" }}>{el.tag}</h3>
                <h2>{el.title}</h2>
                <p>{el.description}</p>
                <h5>Sub-Task</h5>
                {
                  el.subTask.map((e) => (
                    <div key={e.id} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between",marginLeft:"10px", marginRight:"10px"}} >
                         <h3>{e.title}</h3>
                         <input type="checkbox" name="" id="" onChange={()=>toggle(e.id,el.id)} checked={e.status}/>
                     
                    </div>
                  ))
                }
                 <button onClick={()=>gotoedit(el.id)}>Edit task</button>
              </div> : console.log())
          }
        </div>
      </div>
      </div>
<div className="todo_done">

      <div style={{border:"2px solid gray"}}>
        <div style={{backgroundColor:"lightgray"}}>
          <h2>Done</h2>
          <hr />
        </div>
        <div>
        {
            tododata.map((el) => el.state === "done" ?
              <div style={{ border: "1px solid black", margin: "auto", marginBottom: "10px", width: "70%" }}>
                <h3 style={{ border: "1px solid #cecece", width: "70%", margin: "auto" }}>{el.tag}</h3>
                <h2>{el.title}</h2>
                <p>{el.description}</p>
                <h5>Sub-Task</h5>
                {
                  el.subTask.map((e) => (
                    <div key={e.id} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between",marginLeft:"10px", marginRight:"10px"}} >
                        <p>{e.title}</p>
                        <input type="checkbox" name="" id="" onChange={()=>toggle(e.id,el.id)} checked={e.status}/>
                      
                    </div>
                  ))
                }
                 <button onClick={()=>gotoedit(el.id)}>Edit task</button>
              </div> : console.log())
          }
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home
