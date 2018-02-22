import React, { Component } from 'react';
import logo from './logo.svg';
import './css/index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './NavBar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <NavBar className="navbar" />
        </MuiThemeProvider>

      </div>
    );
  }
}

export default App;
