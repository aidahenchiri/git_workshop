import { ADD_MOVIE, DELETE_MOVIE, FAIL_MOVIE, GET_BY_ID, GET_MOVIE, LOAD_MOVIE } from "../ActionType/ActionType";

//initialisation
const initialState ={  
    movie:null,
    load:false,    
    error:null
}
//pure function
const MovieReducer =(state=initialState,{type,payload})=>{
    switch (type) {
        case LOAD_MOVIE:
            return{...state,load:true}
        case ADD_MOVIE:
            return{...state,movie:payload.movies,load:false}
        case GET_MOVIE:
            return{...state,movie:payload.movie,load:false}  
        case GET_BY_ID:
            return{...state,movie:payload.movie,load:false}
        case DELETE_MOVIE:
            return{...state,load:false}   
        case FAIL_MOVIE:
            return{...state,error:payload}     
        default:
            return state
    }
}
export default MovieReducer
