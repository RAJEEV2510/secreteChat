import { auth } from 'firebase';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRealTime, updateMessage ,getRealTimeMessages} from '../../actions/UserActions';
import Layout from '../../Components/Layout/Index';
import './style.css';
const Homepage = () => {
    const dispatch =useDispatch();
    const user =useSelector(state=>state.user);
    const auth =useSelector(state=>state.auth);
    const [chatStarted,setChatStarted]=useState('');
    const [chatUser,setChatUser]=useState('');
    const [message,setMessage]=useState('');
    const [userUid,setUserUid]=useState('');
    const  uid=JSON.parse(localStorage.getItem('user')).uid    
//User Component
    const User =(props)=>{
    const user=props.user
    const fn=props.onClick;
    return(
        <>
        <div onClick={fn}className="displayName">
       
        <div style={{margin: '0 10px',display:"flex",justifyContent:'space-around',flex:1,
        fontWeight:"900",
        boxShadow:'1px 1px 10px grey',padding:"5px",color:'white'
    }}>
       
            <span style={{fontWeight: '500',textDecoration:'underline'} }>
            {user.firstName} {user.lastName}</span>

            <span style={{fontWeight: 500}}>{user.isOnline?
                <span style={{color:'darkgreen'}}>⚫️
                </span>
                :<span style={{color:'red'}}>⚫️
                </span>}</span>

        </div>
        </div>
       
        </>

    )
}
useEffect(()=>{

    dispatch(getRealTime(uid))

},[])

const initChat=(user)=>{

setChatStarted(true)
console.log(user)
console.log(chatStarted)
setChatUser(user);
setUserUid(user.uid)
const obj={
    uid_1:auth.uid,
    uid_2:user.uid
}
dispatch(getRealTimeMessages(obj));
}

const submitMessage=()=>{

    const msgObj={
        user_uid_1:auth.uid,
        user_uid_2:userUid,
        message
    }
    console.log(msgObj)

if(message!='')
{
    dispatch(updateMessage(msgObj)).then(()=>{
        setMessage('')
        
        
        var c=document.getElementById('scroll');
    
    
    })
}
}


return(
  <>
 <Layout>
 <h2 style={{color:"white"}}>CHAT USERS</h2>
  
  <section className="container">
  
 <div className="listOfUsers" style={{backgroundColor:'#213352'}}>
 {
     user.users.length>0?
     user.users.map((user)=>{
         return(
             <User  onClick={()=>{initChat(user)}}
             key={user.id} user={user}></User>
         )
     })
     :""
 }

             
 </div>
 <div className="chatArea"  style={{backgroundColor:"#424843",fontSize:"20px"}}>
 {
    chatStarted?<div className="chatHeader"
    >{chatUser.firstName} {chatUser.lastName} </div>:""
 }
     
     <div className="messageSections" id="scroll" >
 {
     chatStarted?
     <>
     {user.conversation.map(conversation=>{
            return(

                <>
                {console.log(conversation.user_uid_1,auth.uid)}
                <div style={{ 
                    marginBottom:"10px",
                    textAlign:conversation.user_uid_1==auth.uid?'right':'left'  }}>
                <p className="messageStyle" >{conversation.message}</p>
            </div>
                </>
            )
     })}
    
 </>
 :''

 }
 <div className="chatControls">     
  
     {
         chatStarted?<>
         <textarea style={{fontSize:"20px"} }
         value={message} onChange={(e)=>{

            setMessage(e.target.value)
         }}
         placeholder="send Messages"
         /><button
         onClick={submitMessage}
         >Send</button></>:''
     }
     </div>
        
     </div>
 </div>
</section>

</Layout>
  </>
)
}
export default Homepage;