import { ADD_ARTICLE, ADD_USER } from "../constants/action-types";

const initiatState = {
    articles: [],
    users: []
}

const rootReducer = (state = initiatState, action)=>{
    if(action.type === ADD_ARTICLE){
        return Object.assign({}, state , {
            articles: state.articles.concat(action.payload)
        })
    }
    if(action.type === ADD_USER){
        return Object.assign({}, state , {
            users: state.users.concat(action.payload)
        })
    }
    return state;
}

export default rootReducer;