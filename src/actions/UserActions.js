import {firestore} from 'firebase';
export const getRealTime=(uid)=>{
    
    return async (dispatch)=>{



            const db=firestore();
            
            db.collection('users').

            onSnapshot((querySnapShot)=>{
                const users=[];
                querySnapShot.forEach((doc)=>{

                    if(uid!=doc.data().uid)
                   { 
                  
                    console.log('docid',doc.data().uid)
                       users.push(doc.data())

                   }

                })
                console.log(users)
                dispatch({type:'USER_GETREALTIME_USERS_SUCCESS',payload:{
                    users:users
                }})

        })
    }
}
export const updateMessage=(msgObj)=>{

    return async (dispatch)=>{

        const db=firestore();
        db.collection('conversation').add({

            ...msgObj,
            isView:false,
            createdAt:new Date()
        }).then((data)=>{

            console.log(data)
            // dispatch({type:'GET_REAL_TIME_MESSAGES'})
        })
    }
}

export const getRealTimeMessages=(user)=>{

    return async (dispatch)=>{

        const db=firestore()
 db.collection('conversation').where('user_uid_1','in',[user.uid_1,user.uid_2]).
 orderBy('createdAt','desc')
 .onSnapshot((querySnapShot)=>{
            const conversation=[];
            
            querySnapShot.forEach((doc)=>{

                if(
                    
                    (doc.data().user_uid_1==user.uid_1 && doc.data().user_uid_2==user.uid_2)
                    ||
                    (doc.data().user_uid_1==user.uid_2 && doc.data().user_uid_2==user.uid_1)
                    
                    ){
                        conversation.push(doc.data())
                    }
                    if(conversation.length>0)
                    {
                        dispatch({type:'GET_REALMESSAGES',payload:{
                            conversation
                        }})


                    }
                    else
                    {
                        dispatch({type:'EMPTY_MESSGES',payload:{
                            conversation
                        }})
                    }


            })

            console.log(conversation)


        })


    }
}
