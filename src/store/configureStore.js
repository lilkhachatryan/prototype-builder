import { createStore, applyMiddleware } from "redux";
import reducers from '../reducers';

export default function configureStore (initialState = {}) {
    const enhancer = applyMiddleware();

    return createStore(reducers, initialState, enhancer);
}
