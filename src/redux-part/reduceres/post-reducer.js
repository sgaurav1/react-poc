import { POSTS_LOADED, POST_LOADING } from "../constants/action-types"

const initialState = {
    isPostLoading: false,
    posts: []
}

function postRedeucer(state = initialState, action){
    
    if(action.type === POST_LOADING){
        return Object.assign({}, state, {
            isPostLoading: true
        })
    }
    if(action.type === POSTS_LOADED){
        state.posts = [];
        return Object.assign({}, state, {
            posts: action.payload,
            isPostLoading: false
        })
    }
    return state;
}

export default postRedeucer;