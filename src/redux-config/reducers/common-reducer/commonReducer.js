import { OPEN_SIDEBAR } from "../../constants/actions-types";

const initialState = {
    isSideBarOpen: false
}

const commonReducer = (state = initialState,action)=>{
    if(action.type === OPEN_SIDEBAR){
        return Object.assign({}, state, {
            isSideBarOpen: action.payload
        })
    }
    return state;
}

export default commonReducer;