import React, { Component } from 'react';
import './css/index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/NavBar';
import Tabley from './components/Table';
import MapContainer from './containers/MapContainer';
import Listy from './components/Listy';
import Drawery from './components/Drawery';
import IndexPage from './containers/IndexPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
        <NavBar />
          <Router>
            <div>
              <Route exact path="/" component={IndexPage} />
              <Route exact path="/nearby" component={Listy} />
              <Route exact path="/myreviews" component={Tabley} />
            </div>
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
