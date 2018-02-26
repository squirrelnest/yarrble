import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import yomama from './reducers/index';

/* createStore(reducers, initial state) */

let store = createStore(yomama, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export function render() {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
};

render();

console.log("hello")
console.log(store)
const unsubscribe = store.subscribe(() => console.log(store.getState()))

unsubscribe()
