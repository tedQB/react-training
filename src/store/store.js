import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as home from './home/reducer';
import * as production from './production/reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(combineReducers({ ...home, ...production }), composeWithDevTools(
    applyMiddleware(thunk),
    // other store enhancers if any
));
/*
let store = createStore(
    combineReducers({ ...home, ...production }),
    applyMiddleware(thunk),
);
*/

export default store;
