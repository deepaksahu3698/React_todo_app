import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <div style={{"height":"50px","border":"1px solid teal","width":"45%","margin":"auto","display":"flex","alignItems":"center","justifyContent":"space-around","color":"white","fontSize":"20px","backgroundColor":"teal"}}>
            <Link style={{"color":"white"}} to="/" >Home</Link>
            <Link style={{"color":"white"}} to= "/addtodo">Add todo</Link>
            <Link style={{"color":"white"}} to= "/summary">SUMMARY</Link>
            <Link style={{"color":"white"}} to="/login">Login</Link>
            <Link style={{"color":"white"}} to= "/signup">Signup</Link>
           
        </div>
    )
}



export default Navbar;