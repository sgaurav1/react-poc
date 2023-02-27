import { USER_LOGGEDIN, USER_LOGIN, USER_LOGOUT, USER_NOTLOGGEDIN } from "../../constants/actions-types";

const initialState = {
    auth: null,
    isLoggedIn: false,
    loggedUserData: null
}


function authReducer(state = initialState, action) {

    if (action.type === USER_LOGGEDIN) {
        return Object.assign({}, state, action, {
            auth: action.payload,
            isLoggedIn: true,
            loggedUserData: action.userData
        })
    }
    if (action.type === USER_NOTLOGGEDIN) {
        return Object.assign({}, state, {
            auth: initialState.auth,
            isLoggedIn: false,
            loggedUserData: initialState.loggedUserData
        })
    }
    if (action.type === USER_LOGIN) {
        localStorage.setItem('userToken', action.payload.token)
        return Object.assign({}, state, {
            auth: action.payload,
            isLoggedIn: true,
            loggedUserData: action.userData
        })
    }
    if (action.type === USER_LOGOUT) {
        return Object.assign({}, state, {
            auth: initialState.auth,
            isLoggedIn: false,
            loggedUserData: initialState.loggedUserData
        })
    }
    return state;
}

export default authReducer;

