import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './reducer/authReducer';
const initialState = {
    auth: {
        token: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : undefined,
    }
};
const reducer = combineReducers({ auth: authReducer })
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default Store;