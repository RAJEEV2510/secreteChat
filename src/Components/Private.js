import React from 'react';
import LoginPage from '../container/LoginPage/Index';
import {Link, Redirect, Route} from 'react-router-dom';
const PrivateRoute = (props) => {
    const user=localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):'null';
    console.log(user)
    
return(

  <>
 {
     
    user==='null'?
    <><Redirect to='/login'></Redirect></>:
    <><Route path={props.path} exact component={props.component}></Route>
</>

}
 </>
)
}

export default PrivateRoute;