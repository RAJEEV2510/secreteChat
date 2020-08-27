const initState={
    users:[],
    conversation:[]
}

export default (state=initState,action)=>{
    console.log(action)
switch(action.type) {
  
     case "USER_GETREALTIME_USERS_SUCCESS"  :
     return  state={
          ...state,
          users:action.payload.users
      }
      break;
      case "GET_REALMESSAGES":
            return state={
                ...state,
                conversation:action.payload.conversation
            }
          break;
      default :
      return {...state}

}
}