import { combineReducers, createStore } from 'redux';
import reduceAuth from './selector';

const rootReducer = combineReducers({
    profile: reduceAuth,
});

export const reduxStore = createStore(rootReducer);
