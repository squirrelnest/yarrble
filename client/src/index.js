import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import yomama from './reducers/index';

/* createStore(reducers, initial state) */

let store = createStore(yomama, window.STATE_FROM_SERVER);

export function render() {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
};

render();

console.log("hello")
console.log(store.getState())
const unsubscribe = store.subscribe(() => console.log(store.getState()))
