import { combineReducers } from "redux";
import counterReducer from "./counter-reducer";
// import rootReducer from './root-reducer';
import postRedeucer from './post-reducer';
import addUserandArticleReducer from "./user-and-list-reducer";

const rootReducer = combineReducers({counterReducer, postRedeucer, addUserandArticleReducer})

export default rootReducer;

