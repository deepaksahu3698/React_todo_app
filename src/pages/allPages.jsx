import React from "react";
import {Route , Routes} from 'react-router-dom';
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import AddTodo from "./addtodo";

const Pages = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/addtodo" element={<AddTodo/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
    )
}

export default Pages;