import React,{useState} from 'react';
import Layout from '../../Components/Layout/Index';
import {signup} from '../../actions/index'
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './style.css'
const RegisterPage = () => {
  const [firstName,setFirstName]=useState('')  
  const [lastName,setLastName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('');
  const auth=useSelector(state=>state.auth)
  const dispatch=useDispatch();
  const registerUser=(event)=>{
    event.preventDefault();
const user={
  firstName,
  lastName,
  email,
  password
}
dispatch(signup(user))

  }
  
 if(auth.authenticated==true)
 {
   return <Redirect to='/'></Redirect>
 }

return(
  <>
  <Layout>
 
  <form 
  onSubmit={registerUser}
  >
  <h3>Sign up</h3>   
  <br></br>  
  <input name="firstname" type="text" placeholder="first name"  value={firstName}  onChange={(e)=>{setFirstName(e.target.value)}} ></input>
  <br>
  </br>
  <br>
  </br><br>
  </br>
  <input name="lastname" type="text" placeholder="last name"  value={lastName}  onChange={(e)=>{setLastName(e.target.value)}} ></input>
  <br>
  </br>
  <br>
  </br><br>
  </br>

  <input name="email" type="text" placeholder="email"  value={email}  onChange={(e)=>{setEmail(e.target.value)}} ></input>

  <br>
  </br>
  <br>
  </br><br>
  </br>
  <input name="password" type="password" placeholder="password"  value={password}  onChange={(e)=>{setPassword(e.target.value)}} ></input>
  
  <br>
  </br>
  <br>
  </br><br>
  </br>
 
  <button> Login</button>
  
  </form>
  
  
  </Layout>
 
</>
)
}

export default RegisterPage