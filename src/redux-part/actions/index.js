import { ADD_ARTICLE, ADD_USER, COUNTE_INCREMENT, COUNTE_DECREMENT, COUNTE_RESET, POST_LOADING, POSTS_LOADED, USER_LOADING } from "../constants/action-types";
import store from "../store";


export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload };
}

export function addUser(payload) {
    store.dispatch({ type: USER_LOADING })
    return function (_dispatch) {
        setTimeout(() => {
            store.dispatch({ type: ADD_USER, payload })
        }, 2000)
    }
}

// ======= Counter actions 

export function increment() {
    return { type: COUNTE_INCREMENT }
}
export function decrement() {
    return { type: COUNTE_DECREMENT }
}
export function reset() {
    return { type: COUNTE_RESET }
}


// action for getData of posts

export function getData() {
    store.dispatch({ type: POST_LOADING });
    return function (dispatch) {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then((json) => {
                store.dispatch({ type: POSTS_LOADED, payload: json })
            })
    }
}

