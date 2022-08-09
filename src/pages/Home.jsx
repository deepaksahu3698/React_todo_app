import { Button, Checkbox, FormControlLabel } from '@mui/material'
import React from 'react'
import "./Home.css";
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { logout } from '../redux/auth/action'
import Userdetails from './Userdetails'
import  {TodoContext} from "./addtodo"
import { useContext } from "react";
const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [data, setData] = React.useState([])
  const profileData = useSelector(state => state?.profile)
  const token = useSelector(state => state?.token)
  console.log("profile data in home", profileData)
  console.log(token)

//   const{allTodo}=useContext(TodoContext)
//   console.log(allTodo)


  React.useEffect(() => {
    (!profileData) ? <Navigate to='/login' /> :
    handleFetch()
  }, [])
  
  const handleLogout = () => {
    dispatch(logout())
    navigate('/signup')
  }
//   const base_url=process.env.REACT_APP_BASE_URL
  const handleFetch = () => {
    fetch(`https://advtododb.herokuapp.com/tasks`).then((res) => res.json()).then((res) => setData(res))
  }
  
  console.log(data)

  const[all,SetAll]=React.useState(0)
  const[personal,Setpersonal]=React.useState(0)
  const[official,setOfficial]=React.useState(0)
  const[other,setother]=React.useState(0)
//   SetAll(all+data.length)
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
  

  return (
    (!profileData) ? <Navigate to='/login' /> : <div className='container_home'>
      <div className='profile_div'>
      
        <div className='profile' style={{border:"2px solid teal"}}>
          <div style={{backgroundColor:"teal"}}>
            <h2>User Details</h2>
          </div>
          <hr />
          <div>
            <div><h3>Name -{`${profileData.name}`}</h3></div>
            <div><h3>Number -{`+91${profileData.mobile}`}</h3></div>
            <div><h3>Email -{`${profileData.email}`}</h3></div>
          </div>
          <div>
            <button onClick={() => handleLogout()} variant="contained">LOGOUT</button>
          </div>
        </div>
      </div>
      <Userdetails/>
<div className="todo">
      <div style={{border:"2px solid blue"}}>
        <div style={{backgroundColor:"blue"}}>
          <h2 >Todo</h2>
        <hr />
        </div>
        <div>
          {
            data.map((el) => el.state == "todo" ?
              <div style={{ border: "1px solid black", margin: "auto", marginBottom: "10px", width: "70%" }}>
                <h4 style={{ border: "1px solid #cecece", width: "70%", margin: "auto" }}>{el.tag}</h4>
                <h1>{el.title}</h1>
                <p>{el.description}</p>
                <h5>Sub-Task</h5>
                {
                  el.subTask.map((e) => (
                    <div key={e.id} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between",marginLeft:"10px", marginRight:"10px"}} >
                        <p>{e.title}</p>
                      <FormControlLabel control={<Checkbox checked={e.status} />} />
                     
                      
                    </div>
                  ))
                }
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
            data.map((el) => el.state === "inProgress" ?
              <div style={{ border: "1px solid black", margin: "auto", marginBottom: "10px", width: "70%" }}>
                <h3 style={{ border: "1px solid #cecece", width: "70%", margin: "auto" }}>{el.tag}</h3>
                <h2>{el.title}</h2>
                <p>{el.description}</p>
                <h5>Sub-Task</h5>
                {
                  el.subTask.map((e) => (
                    <div key={e.id} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between",marginLeft:"10px", marginRight:"10px"}} >
                         <h3>{e.title}</h3>
                      <FormControlLabel control={<Checkbox checked={e.status} />} />
                     
                    </div>
                  ))
                }
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
            data.map((el) => el.state === "done" ?
              <div style={{ border: "1px solid black", margin: "auto", marginBottom: "10px", width: "70%" }}>
                <h3 style={{ border: "1px solid #cecece", width: "70%", margin: "auto" }}>{el.tag}</h3>
                <h2>{el.title}</h2>
                <p>{el.description}</p>
                <h5>Sub-Task</h5>
                {
                  el.subTask.map((e) => (
                    <div key={e.id} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between",marginLeft:"10px", marginRight:"10px"}} >
                        <p>{e.title}</p>
                      <FormControlLabel control={<Checkbox checked={e.status} />} />
                      
                    </div>
                  ))
                }
              </div> : console.log())
          }
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home
