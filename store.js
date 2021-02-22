import {combineReducers, createStore,applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import main_reducer from "./reducers/main_reducer";
let reducers= combineReducers({
    main : main_reducer
})



let store = createStore(reducers,applyMiddleware(thunk));

window.state = store.getState

export default store