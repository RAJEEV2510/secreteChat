import  {createStore,applyMiddleware} from 'redux';
import rootReducer from '../Reducers/index'
import thunk from 'redux-thunk';
//thunk use for return function instead of object
const store=createStore(rootReducer,applyMiddleware(thunk));
export default store;