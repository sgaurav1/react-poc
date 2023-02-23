// import {createStore} from 'react-redux';
import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import postReducer from '../reducers/index';
import thunk from 'redux-thunk';

const store = createStore(
    postReducer, 
    applyMiddleware(thunk)
);

export default store;