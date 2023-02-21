import { ADD_ARTICLE, ADD_USER, COUNTE_INCREMENT, COUNTE_DECREMENT, COUNTE_RESET } from "../constants/action-types";

const initiatState = {
    // articles: [],
    // users: [],
    counter: 0
}

// const rootReducer = (state = initiatState, action) => {
//     if (action.type === ADD_ARTICLE) {
//         return Object.assign({}, state, {
//             articles: state.articles.concat(action.payload)
//         })
//     }
//     if (action.type === ADD_USER) {
//         return Object.assign({}, state, {
//             users: state.users.concat(action.payload)
//         })
//     }
//     return state;
// }

const counterReducer = (state = initiatState, action) => {
    console.log(action);
    if (action.type === COUNTE_INCREMENT) {
        return Object.assign({}, state, {
            counter: state.counter + 1
        })
    }
    if (action.type === COUNTE_DECREMENT) {
        return Object.assign({}, state, {
            counter: state.counter - 1
        })
    }
    if (action.type === COUNTE_RESET) {
        return Object.assign({}, state, {
            counter: initiatState.counter
        })
    }
    return state;
}


export default counterReducer;