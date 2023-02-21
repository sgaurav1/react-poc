import {createStore} from 'redux';
import rootReducer from '../reduceres/root-reducer';

const store = createStore(rootReducer);

export default store;