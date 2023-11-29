// store.js

import { createStore } from 'redux';
import rootReducer from './reducers'; // Reducer'larınızı ekleyin

const store = createStore(rootReducer);

export default store;
