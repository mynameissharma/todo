export const authReducer=(state,{type,payload})=>{
   switch(type){
     case "ADD_TODO":
        return{
            ...state,
            todolist:payload
        }
    case "USER":
          return{
              ...state,
             email:payload.email,
             username:payload.username,
             mobileno:payload.mobileno,
             token:payload.token,
             id:payload._id,
             todolist:payload.todolist
            }
    default:
        return{
            ...state
        }
   }
}