import { ADD_POST, EDIT_POST, ERROR, POSTS_LOADED, POSTS_LOADING } from "../constants/actions-types";

const initialState = {
    posts: [],
    isLoading: true,
    error: null
}


function postReducer(state = initialState, action){
    if(action.type === POSTS_LOADING){
        return Object.assign({}, state, {
            isLoading: true,
            error: null
        })
    }
    if(action.type === POSTS_LOADED){
        return Object.assign({}, state, {
            posts: action.payload,
            isLoading: false,
            error: null
        })
    }
    if(action.type === ADD_POST){
        return Object.assign({}, state, {
            posts: state.posts.concat(action.payload).reverse(),
            error: null
        })
    }
    if(action.type === EDIT_POST){
        return Object.assign({}, state, {
            posts: state.posts.map((item)=>{
                if(item['id'] === action.payload.id){
                    // @ts-ignore
                    item = action.payload;
                    return item;
                }else{
                    return item;
                }
            }),
            error: null
        })
    }
    if(action.type === ERROR){
        return {...state, error: action.error}
    }
    return state;
}

export default postReducer;