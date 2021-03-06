import React, { Component, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../feature/UseSlice";
import './login.css'
const Login = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const dispatch =useDispatch()
    const handleSubmit=(e)=>{
      e.preventDefault();
      dispatch(login({
        name:name,
        email:email,
        password:password,
        loggedIn:true,

      }))
    }
  return (
    <div className="login">
      <form className="login__form" onSubmit={handleSubmit}>
        <h1>Login here</h1>
        <input 
        type="text"
         placeholder="name"
         value ={name}
         onChange={(e)=>setName(e.target.value)}
         />
        <input 
        type="email"
         placeholder="Email" 
         value ={email}
         onChange={(e)=>setEmail(e.target.value)}
         />
        <input 
        type="password" 
        placeholder="Password" 
        value ={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button type="submit" className="submit__btn">login</button>
      </form>
    </div>
  );
};

export default Login;
