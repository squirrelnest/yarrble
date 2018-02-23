import React, { Component } from 'react';
import './css/index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/NavBar';
import Tabley from './components/Table';
import Mappy from './components/MapContainer';
import Listy from './components/Listy'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <NavBar className="navbar" />
          <div className="row"><Mappy className="mappy" /><Listy className="listy" /></div>
          <Tabley className="table" />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
