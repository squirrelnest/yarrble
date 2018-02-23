import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const store = []

export function render() {
  ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
  );
};

// store.dispatch({ type: '@@INIT' });

// remove render() here
