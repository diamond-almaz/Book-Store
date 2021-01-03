import {applyMiddleware, createStore} from "redux";
import {logger} from "redux-logger/src";
import rootReducer from './reducers'

export default ()=>{
    const store=createStore(rootReducer,applyMiddleware(logger))
    return store;
}