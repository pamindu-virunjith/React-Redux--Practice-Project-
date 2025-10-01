import { combineReducers } from "redux";
import ReducerAllpost from "./reducerAllpost";

const rootReducer = combineReducers({
    allPost: ReducerAllpost,
})

export default rootReducer