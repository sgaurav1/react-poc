import { ADD_ARTICLE, ADD_USER } from "../constants/action-types";


export function addArticle(payload){
    return {type: ADD_ARTICLE, payload};
}

export function addUser(payload){
    return {type: ADD_USER, payload}
}

