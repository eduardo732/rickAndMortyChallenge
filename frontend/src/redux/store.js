import { createStore, combineReducers, compose , applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import charLReducer from './charLDucks'
import charCReducer from './charCDucks'
import charEReducer from './charEDucks'
import locationReducer from './eLocationDucks'

const rootReducer = combineReducers({
    charL: charLReducer,
    charC: charCReducer,
    charE: charEReducer,
    location: locationReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ));
    return store;
}