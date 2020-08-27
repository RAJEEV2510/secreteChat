import {combineReducers} from 'redux';
import authReducer from './AuthReducers'
import userReducer from './UserReducer'
const rootReducer =combineReducers({
    auth:authReducer,
    user:userReducer
})

export default rootReducer;

