import { POSTS_LOADING, POSTS_LOADED, ADD_POST, EDIT_POST, DELETE_POST, ERROR } from "../constants/actions-types";
import store from "../store";
import { ENDPOINTS } from "../../utilities/config";
import axios from "axios";

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