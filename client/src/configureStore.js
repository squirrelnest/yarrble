import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from 'redux'

import thunk from 'redux-thunk'
import yomama from './reducers/index';

// if you're using redux-thunk or other middlewares, add them here
const createStoreWithMiddleware = compose(applyMiddleware(thunk))(createStore)

// const store = createStore(yomama, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));


export default function configureStore(initialState = {}) {
  return createStoreWithMiddleware(yomama, initialState);
}
