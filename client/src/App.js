import React, { Component } from 'react';
import './css/index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/NavBar';
import Tabley from './components/Table';
import MapContainer from './containers/MapContainer';
import Listy from './components/Listy';
import Drawery from './components/Drawery';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <NavBar className="navbar" />
          <div className="row"><MapContainer handleToggle={this.handleToggle}/><Listy /></div>
          <Tabley className="table" />
          <Drawery open={this.state.open}/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
