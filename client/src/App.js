import React, { Component } from 'react';
import './css/index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/NavBar';
import Tabley from './components/Table';
import MapContainer from './components/MapContainer';
import Listy from './components/Listy';
import Drawery from './components/Drawery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <NavBar className="navbar" />
          <div className="row"><MapContainer /><Listy /></div>
          <Tabley className="table" />
          <Drawery />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
