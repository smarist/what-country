import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reduxReducer from './reducers/appReducer';

const initState = {};
const store = createStore(reduxReducer, initState, applyMiddleware(thunk));

export default store;
