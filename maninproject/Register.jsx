import React from 'react'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import register from './assets/register.png'
import './styles/register.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from './assets/logo2.png'
import user from './assets/user.png'
const Register = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()


  const handleSubmit= (e)=>{
    e.preventDefault();
    if(name === ""){
      alert("Name canot be empty")
    }else if(email === ""){
      alert("Email cannot be empty")

    }else if(password === ""){
      alert("Password cannot be empty")
    }else{
      localStorage.setItem('name',name)
      localStorage.setItem('email',email)
      localStorage.setItem('password',password)

      alert("Registration Successfull")

      setName('');
      setEmail('');
      setPassword('');
      
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

<button className="btn2"><Link to='/'>Login</Link> </button>

{/* <button className="btn2"><Link to='/'>Logout</Link> </button> */}

</div>

</div>
    <form>

                
                <div className="registration">
                    
    
            <div class="form-group4">
            <h2>Register</h2>
                
                <input type="text" className="Name" name="uname" placeholder="UserName" value={name} onChange={e =>setName (e.target.value)} /> <br />

                <input type="email" class="email" name="email" placeholder="Email"  value={email} onChange={e => setEmail(e.target.value)}/> <br />

                <input type="text" class="form-control" name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}  />  <br />

                <button type='submit' onClick={handleSubmit}>Create Account</button> 

                <h5>
                    Already have <br />an Account? <Link to="/">Login</Link>

                </h5>
                <div className="form-group2">
                <img src={register} alt="register" />
                </div>
            </div>
            </div>

            <div className='user'>
      <img src={user} alt="#" />
      </div> 
            
            </form>

           <div className='foot'> <Footer /></div>
    </>
  )
}

export default Register
