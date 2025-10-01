import {thunk} from 'redux-thunk';
import rootReducer from './reducers';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';


const middleware =[thunk];
const initialState ={};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
)

export default store;