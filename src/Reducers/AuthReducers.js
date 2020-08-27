const intialState={
    firstName:'',
    lastName:'',
    uid:"",
    email:"",
    authenticating:false,
    authenticated:false
}

export default (state=intialState,action)=>{
        switch(action.type)
        {
            case 'USER_LOGIN_REQUEST':
               return { ...state,
                authenticating:true
                }
                break;
             case 'USER_LOGIN_SUCCESS':   
             console.log(action)
             return { 
                 ...state,
                 authenticated:true,
                 ...action.payload.user,
                 
                  authenticating:false
            
            }
                break;
            case "USER_LOGOUT_REQUEST":
                break;

            case "USER_LOGOUT_SUCCESS":
                return {
                    ...intialState
                }
                    break;    
            
                default :
                return {...state}
        }

}

//it is reducer which takes two argument one is state and another is action