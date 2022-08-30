import React from 'react'
import '../App.css'
import { Link } from "react-router-dom";

const HomePage = () => { 
  return (
    <div className='Homepage'>
      <h1 id='login-header'>Welcome</h1>
      <Link to="/signup" ><button className='signup-btn'>Go to Signup</button></Link> 
    </div>
  )
}

export default HomePage