// import React from 'react';
// import ReactDOM from 'react-dom';
// import './css/index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
//
// -----

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import changeCount from './reducers/changeCount';
import createStore from './createStore';

const store = createStore(changeCount);

export function render() {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
};

store.dispatch({ type: '@@INIT' });

// remove render() here
