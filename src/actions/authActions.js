import { auth, firestore } from 'firebase'
export const signup = (user) => {
     return async (dispatch) => {
        const db = firestore();
        dispatch({ type: 'USER_LOGIN_REQUEST' })
        
        auth().createUserWithEmailAndPassword(user.email, user.password).then((data) => {
            const currentuser = auth().currentUser;
            currentuser.updateProfile({
                displayName: `${user.firstName} ${user.lastName}`

            }).then(() => {
                let firstName = user.firstName;
                let lastName = user.lastName;
                let uid = data.user.uid;
                let createdAt = new Date();
                let email = user.email;
                db.collection('users').doc(uid).set({

                    firstName,
                    lastName,
                    uid,
                    createdAt,
                    isOnline:true
                }).then(() => {
                    localStorage.setItem('user', JSON.stringify({
                        firstName,
                        lastName,
                        uid,
                        email
                    }));
                    console.log('user login succees')
                    dispatch({
                        type: 'USER_LOGIN_SUCCESS',
                        payload: {
                            user: {
                                firstName,
                                lastName,
                                uid,
                                email,
                           
                            }
                        }
                    })



                })

            })

        }).catch(err=>
            {
            alert('invalid mail or invalid password')
            })

}

}


export const signin=(user)=>{
    return async (dispatch)=>{
        console.log('sigin')
        dispatch({ type: 'USER_LOGIN_REQUEST'})
          auth().signInWithEmailAndPassword(user.email,user.password).then((data)=>{
            
              const name=  data.user.displayName.split(' ');
              const firstName=name[0];
              const lastName=name[1];
            localStorage.setItem('user',JSON.stringify({firstName,lastName,uid:data.user.uid,email:data.user.email}))
            const db=firestore();
            db.collection('users').doc(data.user.uid).update({

                isOnline:true
            }).then(()=>{
                
                dispatch({
                    type: 'USER_LOGIN_SUCCESS',
                    payload: {
                        user: {
                            firstName,
                            lastName,
                            uid:data.user.uid,
                            email:data.user.email,
                            authenticated:true
                        }
                    }
                })

            })
            }).catch(err=>
                {
                alert('invalid mail or invalid password')
          

          })         


    }}


    
export const isloggedInUser=()=>{

    const user=localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):null;
  
    return async dispatch=>
    {
 
            if(user)
            {
                
                dispatch({type:"USER_LOGIN_SUCCESS",payload:{
                    user:user
                }})
            }


    }  }

export const logout=(uid)=>{
        return async (dispatch)=>{
         //Now logout user
            const db=firestore();
            db.collection('users').doc(uid).update({

                isOnline:false
            }).then(()=>{
                auth().signOut().then((data)=>{
                    localStorage.clear();
                    window.location.reload()
                    console.log('user log out')
                    dispatch({type:"USER_LOGOUT_SUCCESS"});
                })       
            })
         
        
    }
}