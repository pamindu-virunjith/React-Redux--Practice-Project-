import { FETCH_BUTTON_CLICKED } from "../actions/types";

function ReducerAllpost(state=null, action) {
    switch(action.type){
        case FETCH_BUTTON_CLICKED:
            return action.payload;
    }
    return state;
}

export default ReducerAllpost