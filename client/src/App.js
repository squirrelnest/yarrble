import React, { Component } from 'react';
import './css/index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import NavBar from './components/NavBar';
import MyReviews from './containers/MyReviews';
import Home from './containers/Home';
import ShowLocation from './containers/ShowLocation';
import LoginContainer from './containers/LoginContainer';
import RegistrationContainer from './containers/RegistrationContainer';
import { connect } from 'react-redux';

export class App extends Component {

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <div>
            <Router>
              <div>
                <NavBar store={this.props.store}/>
                <Switch>
                  <Route exact path="/" render={() => <Home store={this.props.store} />} />
                  <Route path={`/locations/:locationId`} component={ ShowLocation } />
                  <Route exact path="/myreviews" render={() => <MyReviews store={this.props.store} />} />
                  <Route exact path="/login" component={ LoginContainer } />
                  <Route exact path="/signup" component={ RegistrationContainer } />

                </Switch>
              </div>
            </Router>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    locations: state.locations.locations,
    reviews: state.reviews.reviews,
    auth: state.auth
  };
};

/*
connect() returns a higher order component that listens for redux store changes
and renders a component with props that are values from the store.
*/

const WrapperApp = connect(mapStateToProps)(App);

export default WrapperApp
