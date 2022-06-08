import axios from 'axios';
import { SIGNUP_FAIL, SIGNUP_REQUEST, SIGNUP_SUCESS } from '../constant/authConstant';
const { LOGIN_REQUEST, LOGIN_SUCESS, LOGIN_FAIL } = require("../constant/authConstant");


export const login = (email, password) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
        const { data } = await axios.post('http://localhost:4001/api/v1/auth/login', { email, password });
        if (data.sucess === true) {
            localStorage.setItem('token', JSON.stringify(data.token));
            dispatch({ type: LOGIN_SUCESS, payload: data });
        }
        else {
            dispatch({ type: LOGIN_FAIL, payload: data.message });
        }
    }
    catch (err) {
        dispatch({ type: LOGIN_FAIL, payload: err.message });
    }
}

export const signUp = (name, email, password) => async (dispatch) => {
    dispatch({ SIGNUP_REQUEST });
    try {
        const { data } = await axios.post('http://localhost:4001/api/v1/auth/signup', { name, email, password });
        if (data.sucess === true) {
            dispatch({ type: SIGNUP_SUCESS, payload: data });
        }
        else {
            dispatch({ type: SIGNUP_FAIL, payload: data.message });
        }
    }
    catch (err) {
        dispatch({ type: SIGNUP_FAIL, payload: err.message });
    }
}

export const refresh = (token) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
        const { data } = await axios.post('http://localhost:4001/api/v1/auth/refresh', { token });
        dispatch({ type: LOGIN_SUCESS, payload: data });
    }
    catch (err) {
        dispatch({ type: LOGIN_FAIL, payload: err.message });
    }
}