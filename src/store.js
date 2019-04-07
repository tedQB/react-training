import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers/index";

const store = createStore(rootReducers, applyMiddleware(thunk));

//通过combineReducers把多个reducer进行合并

export default store;
