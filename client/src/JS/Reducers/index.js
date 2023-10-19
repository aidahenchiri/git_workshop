import {combineReducers} from 'redux'
import userReducer from './Reducers'
import MovieReducer from './ReducersMovie'
const rootReducer=combineReducers({userReducer,MovieReducer})
export default rootReducer