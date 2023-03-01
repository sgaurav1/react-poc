// import {createStore} from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from '@reduxjs/toolkit';
import rootreducer from '../reducers/index';
import thunk from 'redux-thunk';

const store = createStore(
    rootreducer, 
    applyMiddleware(thunk)
);

export default store;