import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import WrapperApp from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import yomama from './reducers/index';
import { addLocation } from './actions/locationActions';

let store = createStore(yomama, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
      <WrapperApp store={store} />
    </Provider>,
    document.getElementById('root')
)
