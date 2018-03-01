import React, { Component } from 'react';
import './css/index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import NavBar from './components/NavBar';
import MyReviews from './containers/MyReviews';
import Nearby from './containers/Nearby';
import Home from './containers/Home';
import LoginContainer from './containers/LoginContainer';
import { fetchLocations } from './actions/thunks';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class App extends Component {

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <div>
            <NavBar />
            <Router>
              <Switch>
                <Route exact path="/" render={() => <Home store={this.props.store} locations={this.props.locations} />} />
                <Route exact path="/nearby" render={() => <Nearby store={this.props.store} locations={this.props.locations} />} />
                <Route exact path="/myreviews" render={() => <MyReviews store={this.props.store} reviews={this.props.reviews} />} />
                <Route exact path="/login" component={ LoginContainer } />
              </Switch>
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
    reviews: state.reviews.reviews
  };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchLocations}, dispatch)
};

/*
connect() returns a higher order component that listens for all of the redux store changes
and renders you a component with props that are values from the store.
*/

const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default WrapperApp
