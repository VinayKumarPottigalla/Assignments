import React from 'react'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import login from './assets/login.png'
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import user2  from './assets/user.png'
import logo from './assets/logo2.png'
import './styles/login.css'
const Login = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('')
  const navigate = useNavigate()

  // ===== getting email and password====
  const userEmail = localStorage.getItem('email') ? localStorage.getItem('email') : 'vinaykumar@gmail.com'
  const userPassword = localStorage.getItem('password') ? localStorage.getItem('password') : '123'


  // ==== Submit Function-===

  const handleSubmit= (e)=>{
    e.preventDefault();
    if (email === userEmail && password === userPassword){
      alert("Login succesfull")
      navigate('./Home')
      
    }else{
      alert("Enter correct email and password")
     
    
  }
  }

  return (
    <>
    <div className="header">

{/* Logo Starts */}
<div className="logo">
    <img src={logo} alt="logo" />
</div>
{/* Logo Ends */}

<div  className="linksnav">

<button className="btn2"><Link to='/Register'>Register</Link> </button>

{/* <button className="btn2"><Link to='/'>Logout</Link> </button> */}

</div>

</div>
    <form >
     
           
            <div className="registration">
        <div class="form-group">
        <h2>Login</h2>
            
            

            <input type="email" class="form-control" name="email" placeholder="  Email" value={email} onChange={e => setEmail(e.target.value)} /> <br />

            <input type="text" class="form-control" name="password" placeholder="  Password" value={password} onChange={e => setPassword(e.target.value)}/>  <br />

            <button onClick={handleSubmit}  >Login</button> 
            <h4>Don't have an <br /> account? <Link to="/Register">Register</Link></h4>

            </div>
            
            <div  className="form-group3">
                <img src={login} alt="register" />
            </div>
            </div>
            <div className='user2'>
      <img src={user2} alt="#" />
      </div> </form>
           
            <br />
            <div className='footoption'> <Footer /></div>
           
    </>
  )
}

export default Login
