import React,{useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../Components/Layout/Index';
import {signin} from '../../actions/index';
import { Redirect } from 'react-router-dom';
import {isloggedInUser} from '../../actions/authActions'
import './style.css'
  const LoginPage = (props) => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('');
  const dispatch=useDispatch();
  
//for get store values
  const auth=useSelector(state=>state.auth)

  const userLogin=(event)=>{
    event.preventDefault();

    if(email==="" || password=="")
    {
      alert('fill all details')
      return 
    }

 
 dispatch(signin({email,password})).then(()=>{console.log('sfdf')}).catch(err=>{
  console.log(err,'asdasdas')
      alert(err.auth)
    })
  }

 if(auth.authenticated==true)
  {
    return <Redirect to='/'></Redirect>
  }


return(
    <>

    <Layout>

  <form   
  onSubmit={userLogin}
  >
  <h3>Sign in</h3>   
  <br></br>  
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
export default LoginPage;