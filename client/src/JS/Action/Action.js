import axios from "axios"
import { FAIL_USER, FAVORITE, LOAD_USER, LOGIN_USER, LOG_OUT, REGISTER_USER } from "../ActionType/ActionType"
// REGISTER new user
export const register=(newUser)=> async(dispatch)=>   
{   dispatch({type:LOAD_USER}) // appel load

    try {
        let  result =await axios.post("/api/user/register",newUser)  // axios appel api  result.data <= token ,data ,newuser,msg 
        dispatch({type:REGISTER_USER,payload:result.data})
    } catch (error) {
                dispatch({type:FAIL_USER,payload:error})
    }
   
}
// login
export const login = (user) => async(dispatch)=>
{
    dispatch({type:LOAD_USER})
    try {
        let result=await axios.post("/api/user/login",user)   //result = user
        dispatch({type:LOGIN_USER,payload:result.data})
    } catch (error) {
        dispatch({type:FAIL_USER,payload:error.response})

    }
}
export const logOut=() =>async(dispatch)=>
{
    dispatch({type:LOG_OUT})
    
}

export const favorite  = (userId,movie) => async(dispatch)=>
{console.log(userId)
    dispatch({type:LOAD_USER})
    try {
        let result=await axios.post(`/api/user/favoris/${userId}`,movie)   //result = user
        dispatch({type:FAVORITE,payload:result.data})
    } catch (error) {
        dispatch({type:FAIL_USER,payload:error.response})

    }
}
