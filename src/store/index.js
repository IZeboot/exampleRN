import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga'
import devToolsEnhancer, {composeWithDevTools} from 'remote-redux-devtools';
import reducers from './../reducers';

const rootReducer = combineReducers(reducers);

const Store = createStore(rootReducer, devToolsEnhancer());

export default Store;