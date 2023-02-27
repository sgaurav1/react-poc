import { USERS_LIST, USER_DETAIL } from "../../constants/actions-types";


const initialState = {
    userList: []
}

const userOperationsReducer = (state = initialState, action)=>{
    if(action.type === USERS_LIST){
        return Object.assign({}, state, {
            userList: action.payload
        })
    }
    return state;
}



export default userOperationsReducer;