import { createStore, combineReducers, compose , applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import charLReducer from './charLDucks'

const rootReducer = combineReducers({
    charL: charLReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ));
    return store;
}