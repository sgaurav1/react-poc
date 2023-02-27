import { POSTS_LOADING, POSTS_LOADED, ADD_POST, EDIT_POST, DELETE_POST, ERROR, USER_LOGIN, USER_LOGOUT, USER_LOGGEDIN, USER_NOTLOGGEDIN, USER_DETAIL, USERS_LIST } from "../constants/actions-types";
import store from "../store";
import { ENDPOINTS } from "../../utilities/config";
import axios from "axios";


// Auth Actions ==============

function getUserData() {
    return new Promise((resolve, reject) => {
        axios.get(`${ENDPOINTS.singleUser}/4`).then((res) => {
            if (res) {
                resolve(res.data);
            }
        }).catch((e) => {
            reject(e.message);
        })
    })
}

export function checkIsUserLogedIn() {
    return function (_dispatch) {
        const token = localStorage.getItem('userToken');
        if (!token || token === 'undefined' || token === '' || token === null) {
            store.dispatch({ type: USER_NOTLOGGEDIN });
        } else {
            axios.get(`${ENDPOINTS.singleUser}/4`).then((res) => {
                store.dispatch({ type: USER_LOGGEDIN, payload: { token: token }, userData: res.data });
            })
        }
    }
}

export function userLogin(authCredentials) {
    return function (_dispatch) {
        return axios.post(ENDPOINTS.auth, authCredentials).then(async(res) => {
            console.log('res', res);
            if (res) {
                let user = await getUserData();
                console.log('user, data ', user);
                store.dispatch({ type: USER_LOGIN, payload: res.data, userData:user });
            }
            
        })
    }
}

export function userLogout() {
    localStorage.removeItem('userToken');
    return { type: USER_LOGOUT };
}


// userDetals ===============
export function getUserByID(userId) {
    return function (_dispatch) {
        return axios.get(`${ENDPOINTS.singleUser}/${userId}`).then((res) => {
            console.log('user detail', res);
            store.dispatch({ type: USER_DETAIL, payload: res.data });
        })
    }
}

export function getUserList(){
    return function(_dispatch){
        return axios.get(`${ENDPOINTS.userList}`).then((res)=>{
            console.log('userList', res);
            store.dispatch({type: USERS_LIST, payload: res.data})
        })
    }
}

// export 

// =========Gettig post ===============
export function getPosts() {
    store.dispatch({ type: POSTS_LOADING })
    return function (_dispatch) {
        return axios.get(ENDPOINTS.posts).then((res) => {
            store.dispatch({
                type: POSTS_LOADED,
                payload: res.data
            })
        }).catch((e) => {
            store.dispatch({ type: ERROR, error: e.message });
        });
    }
}

export function addPost(data) {
    return function (_dispatch) {
        return axios.post(ENDPOINTS.posts, data).then((res) => {
            store.dispatch({ type: ADD_POST, payload: res.data });
        }).catch((e) => {
            store.dispatch({ type: ERROR, error: e.message });
        });
    }
}

export function updatePost(data) {
    return function (_dispatch) {
        return axios.put(`${ENDPOINTS.posts}/${data.id}`, data).then((res) => {
            store.dispatch({ type: EDIT_POST, payload: res.data });
        }).catch((e) => {
            store.dispatch({ type: ERROR, error: e.message });
        })
    }
}

export function deletePost(postId) {
    return function (_dispatch) {
        return axios.delete(`${ENDPOINTS.posts}/${postId}`).then((res) => {
            store.dispatch({ type: DELETE_POST, payload: res })
        }).catch((e) => {
            store.dispatch({ type: ERROR, error: e.message });
        })
    }
}