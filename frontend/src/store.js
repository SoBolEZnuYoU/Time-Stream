import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { projectReducer } from './reducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    projectReducer: projectReducer(),
});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
