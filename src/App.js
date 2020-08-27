import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Route,BrowserRouter,Switch,Redirect, } from 'react-router-dom';
import './App.css';
import RegisterPage from './container/RegisterPage/Index';
import LoginPage from './container/LoginPage/Index';
import HomePage from './container/Homepage/Index'
import PrivateRoute from './Components/Private';
import {isloggedInUser} from './actions/authActions';
function App() 
{
  const dispatch=useDispatch();
  //for get store values
    const auth=useSelector(state=>state.auth);
    useEffect(()=>{
      if(!auth.authenticated)
      {
     
        dispatch(isloggedInUser());
      }
 
  
    },[])
    
    return (

      <>
      {     console.log(auth,'sdfsdfsddsdfsdw42') }
      <BrowserRouter>
      {/*only logged in user can seen*/ }      
        <PrivateRoute path='/'  component={HomePage}></PrivateRoute>
        <Route exact path='/login' component={LoginPage}></Route>
        <Route exact path='/signup' component={RegisterPage}></Route>
      
      </BrowserRouter>
  
      </>
)} 
export default App;
