import {  applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import reducer from'./Reducer';

const rootReducer = combineReducers({
  data: reducer,
  // Add more reducers if needed
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
