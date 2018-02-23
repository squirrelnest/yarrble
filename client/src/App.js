import React, { Component } from 'react';
import './css/index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import NavBar from './components/NavBar';
import Tabley from './components/Table';
import Listy from './components/Listy';
import IndexPage from './containers/IndexPage';

export default class App extends Component {

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
            <Switch>
              <div>
                <Route exact path="/" component={IndexPage} />
                <Route exact path="/nearby" component={Listy} />
                <Route exact path="/myreviews" component={Tabley} />
              </div>
            </Switch>
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}
