import 'babel-polyfill';
import './css/index.css';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import yomama from './reducers/index';
import WrapperApp from './App';
import { fetchLocations } from './actions/thunks';
import './functions/currentPosition';

let store = createStore(yomama, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

store.dispatch(fetchLocations())

/* Provider exposes store so you can pass it through as a prop on context.
   This allows components to subscribe to store updates and dispatch actions */

render(
    <Provider store={store}>
      <WrapperApp store={store} />
    </Provider>,
    document.getElementById('root')
)
