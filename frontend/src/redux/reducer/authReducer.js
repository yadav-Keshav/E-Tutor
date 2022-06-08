const { LOGIN_REQUEST, LOGIN_SUCESS, LOGIN_FAIL } = require("../constant/authConstant");


export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { loading: true, isLoggedIn: false };
        case LOGIN_SUCESS:
            const token = action.payload.token;
            action.payload.token = undefined;
            return { loading: false, isLoggedIn: true, token, userInfo: action.payload };
        case LOGIN_FAIL:
            return { loading: false, isLoggedIn: false, userInfo: action.payload };
        default:
            return state;
    }
}