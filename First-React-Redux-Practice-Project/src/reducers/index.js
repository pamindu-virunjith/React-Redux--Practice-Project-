import { combineReducers } from "redux";
import ReducerAllpost from "./reducerAllpost";
import ReducerSelectedPost from "./reducerSelectedPost";

const rootReducer = combineReducers({
    allPost: ReducerAllpost,
    selectedPost: ReducerSelectedPost
})

export default rootReducer