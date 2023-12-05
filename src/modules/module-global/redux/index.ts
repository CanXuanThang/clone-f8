import { combineReducers, createStore } from 'redux';
import reduceAuth from './selector';
import errorReducer from '@module-error/redux';

const rootReducer = combineReducers({
    profile: reduceAuth,
    notify: errorReducer,
});

export const reduxStore = createStore(rootReducer);

export type AppState = ReturnType<typeof reduxStore.getState>;
