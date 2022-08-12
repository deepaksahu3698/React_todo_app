import { Button, Checkbox, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, TextareaAutosize, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { logout } from '../redux/auth/action'
// import SubTask from './SubTask'
import "./addtodo.css"
import { addtodo,incofficial,incother,incpersonal,togglesubtodo,inctodo,incall,incdone,incprogress } from '../redux/todo/action'

const AddTodo = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // task
  const [title, setTitle] = useState("")
  const [state,setState] = useState("")
  const [tag,setTag] = useState("")
  const [desc,setDesc] = useState("")

  // sub-task
  const [subTask, setSubTask] = useState("")
  const [subtaskData, setsubtaskData] = useState([])
  const handleAddsub = (subTask) => {
    const data = {
        title:subTask,
        status:false,
        id:uuid()
    }
    setsubtaskData(prev => (
        [...prev,data]
    ))
  }

  const toggleStatus = (id, status) => {
    const updatedData = [...subtaskData].map((el) => el.id===id ? {...el,status:!el.status} : el)
    setsubtaskData(updatedData)
  }


  const handleDelete = (id) => {
    const updatedData = [...subtaskData].filter((el) => el.id!==id )
    setsubtaskData(updatedData)
  }
 
  const profileData = useSelector(state => state?.auth.profile)
  const token = useSelector(state => state?.auth.token)

  useEffect(() => {
    (!profileData) ? <Navigate to='/login' /> : console.log(profileData)
    //  handleFetch();
  }, [])

//   console.log(title,state,tag ,desc)

  const handleLogout = () => {
    dispatch(logout())
    navigate('/signup')
  }

const[allTodo,SetAlltodo]=useState([])

  const handleAdd = (title,state,tag ,desc,subtaskData) => {
    const data = {
      title,
      state,
      tag,
      description:desc,
      subTask:subtaskData
    }
    SetAlltodo(prev => (
        [...prev,data]
    ))

    // console.log(data)
    
    
      // console.log(data.tag)
      if(data.tag=="official"){
        dispatch(incofficial(1))
      }
      if(data.tag=="personal"){
        dispatch(incpersonal(1))
      }
    if(data.tag=="other"){
      dispatch(incother(1))
    }
    if(data.state=="todo"){
      dispatch(inctodo(1))
    }

    if(data.state=="inProgress"){
      dispatch(incprogress(1))
    }
    if(data.state=="done"){
      dispatch(incdone(1))
    }
    dispatch(addtodo(data))
    alert("succefully added")
    
    navigate("/")

    // fetch(`https://advtododb.herokuapp.com/tasks`, {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "content-Type": "application/json"
    //   }
    // }).then((res) => res.json())
    //   .then((res) => {
    //     alert("succefully added")
    //     setTitle("")
    //     setDesc("")
    //     setState("")
    //     setTag("")
    //     setsubtaskData([])
    //     navigate("/")
    //   })
    //   .catch((err) => console.log(err))
  }
//   console.log(allTodo)

const all=useSelector(state =>state?.todo.all)
    const personal=useSelector(state =>state?.todo.personal)
    const official=useSelector(state =>state?.todo.official)
    const other=useSelector(state =>state?.todo.other)
  
  return (
    (!token) ? <Navigate to='/login' /> : <div className='addtodocontainer'>
      <div className='profile_div'>
      
      <div className='profile' style={{border:"2px solid teal"}}>
        <div style={{backgroundColor:"teal"}}>
          <h2>User Details</h2>
        </div>
        <hr />
        <div>
        <div><h3>First Name -{`${profileData.fname}`}</h3></div>
            <div><h3>Last Name -{`${profileData.lname}`}</h3></div>
            <div><h3> Email -{`${profileData.username}`}</h3></div>
            <div><h3>User name -{`${profileData.email}`}</h3></div>
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

<div className="entry_container">
      <div>
        <div>
          <br />
          <label htmlFor="">Enter the Title</label>
          <TextField value={title} onChange={(e) => setTitle(e.target.value)} id="outlined-basic" label="Title" variant="outlined" /><br /><br />
          <label htmlFor="">Enter Description</label>
          <TextareaAutosize value={desc} onChange={(e) => setDesc(e.target.value)} minRows={5} aria-label="empty textarea"placeholder="Description" style={{ width: 200 }}/> <br /><br />
        </div>
        <div>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            style={{ marginLeft: "100px" }}
          >
            <FormControlLabel onChange={(e) => setState(e.target.value)} value="todo" control={<Radio />} label="Todo" />
            <FormControlLabel onChange={(e) => setState(e.target.value)} value="inProgress" control={<Radio />} label="In Progress" />
            <FormControlLabel onChange={(e) => setState(e.target.value)} value="done" control={<Radio />} label="Done" />
          </RadioGroup>
        </div>
       
        <div className=''>
          <h4>Tags</h4>
          <FormGroup style={{ marginLeft: "100px" }}>
            <FormControlLabel onChange={(e) => setTag(e.target.value)} value="official" control={<Checkbox />} label="Official" />
            <FormControlLabel onChange={(e) => setTag(e.target.value)} value="personal" control={<Checkbox />} label="Personal" />
            <FormControlLabel onChange={(e) => setTag(e.target.value)} value="other" control={<Checkbox />} label="Other" />
          </FormGroup>
        </div>
      </div>


      <div>
       
        
         <div>
       <div>
          <br />
          <label htmlFor="">Enter Sub_task</label>
          <TextField value={subTask} onChange={(e) => setSubTask(e.target.value)}  label="Sub Task"  />
          <br />
          <br />
          <Button onClick={() => handleAddsub(subTask)}style={{backgroundColor:"teal",color:"white"}} >ADD SUB-TASK</Button>
          

        </div>
      
        <div>
          {
            subtaskData.map((e) => (
              <div key={e.id} style={{ display: "flex", flexDirection: "row", justifyContent: "space-around",marginTop:"10px", border: "1px solid #cecece" }} >
                <FormControlLabel onChange={() => toggleStatus(e.id, e.status)} control={<Checkbox checked={e.status} />} />
                <h3>{e.title}</h3>
                <Button style={{ height: "70%", marginTop: "15px" }} onClick={() => handleDelete(e.id)} variant="contained">Delete</Button>
              </div>
            ))
          }
        </div>
    </div>


      </div>


      <div>
        <br />
        <Button onClick={() => handleAdd(title,state,tag ,desc,subtaskData)} variant="contained">Create A New Task</Button>

      </div>
    </div>
    {/* <TodoContext.Provider value={{allTodo}}>
        {children}
    </TodoContext.Provider> */}
    </div>
    
  )
}

export default AddTodo

