import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import yomama from './reducers/index';
import { addLocation, removeLocation } from './actions/locationActions';

/* createStore(reducers, initial state) */

let store = createStore(yomama, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export function render() {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
};

render();

/* Testing Redux works by using console.log instead of Redux devtool */

console.log(store.getState())
const unsubscribe = store.subscribe(() => console.log(store.getState()))
store.dispatch(addLocation({nickname: "james", location_id: 200}))
store.dispatch(addLocation({nickname: "rick", location_id: 201}))
store.dispatch(removeLocation(200))
unsubscribe()
