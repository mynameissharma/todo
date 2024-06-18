import {createContext,useContext,useReducer } from "react";
import {authReducer} from "../reducer/UserReducer";
const initialstate={
    email:"",
    username:"",
    id:"",
    todolist:[],
    token:"",
    mobileno:""
}

const UserContext=createContext();

const UserProvider=({children})=>{
const[{email,username,id,todolist,token,mobileno},UserDispatch]=useReducer(authReducer,initialstate)
    return(
        <UserContext.Provider value={{email,username,id,todolist,token,mobileno,UserDispatch}}>
            {children}
        </UserContext.Provider>
    )
}

const useAuth=()=>useContext(UserContext);

export {useAuth,UserProvider}