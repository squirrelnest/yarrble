import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export function render() {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
};

store.dispatch({ type: '@@INIT' });

// remove render() here
