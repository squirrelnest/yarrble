import React, { Component } from 'react';
import logo from './logo.svg';
import './css/index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/NavBar';
import Tabley from './components/Table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <NavBar className="navbar" />
          <Tabley className="table" />
        </MuiThemeProvider>

      </div>
    );
  }
}

export default App;
