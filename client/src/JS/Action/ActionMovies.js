import axios from 'axios'
import { ADD_MOVIE, DELETE_MOVIE, FAIL_MOVIE, GET_BY_ID, GET_MOVIE, LOAD_MOVIE,} from "../ActionType/ActionType"
//add the movie
export const add_movie=(newMovie)=> async(dispatch)=>   
{   dispatch({type:LOAD_MOVIE}) // appel load

    try {
        let  result =await axios.post("/api/movie/add_movie",newMovie)  // axios appel api  result.data <= token ,data ,newuser,msg 
        dispatch({type:ADD_MOVIE,payload:result.data})
    } catch (error) {
            dispatch({type:FAIL_MOVIE,payload:error})
    }

}

export const get_movie=()=>async(dispatch)=>{
    dispatch({type:LOAD_MOVIE})
    try {
        let result=await axios.get("/api/movie/get_movie")
        dispatch({type:GET_MOVIE,payload:result.data})
    } catch (error) {
        dispatch({type:FAIL_MOVIE,payload:error})
    }
}

export const get_byId=(id)=>async(dispatch)=>{
    dispatch({type:LOAD_MOVIE})
    try { 
        let result=await axios.get(`/api/movie/get_byId/${id}`)
        dispatch({type:GET_BY_ID,payload:result.data})

    } catch (error) {
        dispatch({type:FAIL_MOVIE,payload:error})

    }
}

export const deletemovie=(id)=>async(dispatch)=>{
    dispatch({type:LOAD_MOVIE})
    try {
        await axios.delete(`/api/movie/deletemovie/${id}`)
        dispatch({type:DELETE_MOVIE})

    } catch (error) {
        dispatch({type:FAIL_MOVIE,payload:error})

    }
}

