import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { SearchReducer } from './searchReducer';

export const configureStore = () => {
    const store =  createStore(
        combineReducers({
            movies: SearchReducer,
        }),
        applyMiddleware(thunk,logger)
    );
    return store;
}



