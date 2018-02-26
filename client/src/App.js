import React, { Component } from 'react';
import './css/index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Switch } from 'react-router';
import NavBar from './components/NavBar';
import Tabley from './components/Table';
import Listy from './components/Listy';
import IndexPage from './containers/IndexPage';
import { fetchLocations } from './actions/thunks';
import { bindActionCreators } from 'redux';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      locations: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/', {
      method: "GET",
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => {
        this.setState({ locations: response });
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
                <Route exact path="/" render={() => <IndexPage store={this.props.store} locations={this.state.locations} />} />
                <Route exact path="/nearby" render={() => <Listy store={this.props.store} />} />
                <Route exact path="/myreviews" component={Tabley} />
              </Switch>
            </Router>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return { locations: state.locations };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchLocations}, dispatch)
};

const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App);
