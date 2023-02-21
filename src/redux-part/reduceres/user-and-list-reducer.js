import { ADD_ARTICLE, ADD_USER, USER_LOADING } from "../constants/action-types";

const initiatState = {
    articles: [],
    users: [],
    isUserLoading: false
}

const addUserandArticleReducer = (state = initiatState, action) => {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        })
    }
    if(action.type === USER_LOADING){
        return Object.assign({}, state, {
            isUserLoading: true
        })
    }
    if (action.type === ADD_USER) {
        return Object.assign({}, state, {
            users: state.users.concat(action.payload),
            isUserLoading: false
        })
    }
    return state;
}


export default addUserandArticleReducer;