import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
import {Link ,NavLink} from 'react-router-dom'
import {logout} from '../../../actions/authActions'
import './style.css';
const Header = () => {
  const auth =useSelector(state=>state.auth)
  const dispatch=  useDispatch()
  const  uid=localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')).uid:""    
  const logouts=()=>
  {
    dispatch(logout(uid))
    
  }
return(
  <div>
<header className="header">

<div style={{display:'flex',fontSize:'20px',background:'lightblue',flexWrap:'wrap',height:'100px',flexWrap:'wrap',
width:'100%',backgroundColor:'#536478',
justifyContent:'space-around'}}>
<div className="logo">
<img src="https://logodix.com/logo/248275.png"
style={{height:"70px",width:"70px",borderRadius:"50%",position:'absolute',left:"10px",top:'5px'}}
></img>
</div>
{console.log(auth,'sdaasd')}
{!auth.authenticated?
  <ul className="leftMenu" style={{display:'flex',marginLeft:'10%' ,flexWrap:'wrap',justifyContent:'space-around'}}>
<li > <NavLink class="login"

to={'/login'}>Login</NavLink></li>
&emsp;&emsp;&emsp;
<li ><NavLink  class="signup" to={'/signup'}> signup</NavLink></li>
</ul>
:""}

{auth.authenticated?<ul>
  <li>
  
  {auth.firstName} {auth.lastName} &emsp;
  &emsp;&emsp;
  <Link to={'#'} onClick={logouts}>Logout</Link>
  </li></ul>
  :""}
  <marquee>Welcome TO Messenger</marquee>
</div>

</header>     

  
  </div>
)
}
export default Header;