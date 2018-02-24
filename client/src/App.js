import React, { Component } from 'react';
import './css/index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import NavBar from './components/NavBar';
import Tabley from './components/Table';
import Listy from './components/Listy';
import IndexPage from './containers/IndexPage';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      locations: [],
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  componentDidMount() {
    fetch('http://localhost:3001/locations/geojson', {
      method: "GET",
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.text())
      .then(response => {
        this.setState({ locations: JSON.parse(response).locations });
        console.log('setting locations');
        console.log(this.state.locations)
      })
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <div>
            <NavBar />
            <Router>
              <Switch>
                <Route exact path="/" component={IndexPage} />
                <Route exact path="/nearby" render={() => <Listy locations={this.state.locations} />} />
                <Route exact path="/myreviews" component={Tabley} />
              </Switch>
            </Router>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
