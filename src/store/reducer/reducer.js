const initial_state = {
    users :{},
    current_users : {}
    
}
export default(state = initial_state,action)=>{
   console.log("achtion==>",action)
    switch(action.type){
        case "Userdata":
            return({
                ...state,
                current_users : action.payload
                
            })
        case "firebaseusers":
            return({
                ...state,
                users : action.payload
                
            })
    }
    return state 
   
    
}