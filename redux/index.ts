import { applyMiddleware, combineReducers, legacy_createStore as createStore, } from 'redux';
import { chatReducer } from './reducers';
import { createLogger } from 'redux-logger';
const rootReducer = combineReducers({
    chat: chatReducer,
    // OtherReducer
});
export type AppState = ReturnType<typeof rootReducer>;
export default function configureStore() {
    const middlewares = [createLogger({})];
    const middleWareEnhancer = applyMiddleware(...middlewares);
    const store = createStore(rootReducer, middleWareEnhancer);
    return store;
}