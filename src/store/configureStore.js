import { createStore, applyMiddleware } from "redux";
import reducers from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore (initialState = {}) {
    const enhancer = applyMiddleware(thunk);

    return createStore(reducers, initialState, enhancer);
}
