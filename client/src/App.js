import React, { Component } from 'react';
import './css/index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import NavBar from './components/NavBar';
import MyReviews from './containers/MyReviews';
import Nearby from './containers/Nearby';
import Home from './containers/Home';
import ShowLocation from './containers/ShowLocation';
import LoginContainer from './containers/LoginContainer';
import NewReviewForm from './components/NewReviewForm';
import { connect } from 'react-redux';

export class App extends Component {

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <div>
            <Router>
              <div>
                <NavBar />
                <Switch>
                  <Route exact path="/" component={ Home } />
                  <Route path={`/locations/:locationId`} component={ ShowLocation } />
                  <Route exact path="/reviews/myreviews" render={() => <MyReviews store={this.props.store} />} />
                  <Route exact path="/login" component={ LoginContainer } />
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
    reviews: state.reviews.reviews
  };
};

/*
connect() returns a higher order component that listens for redux store changes
and renders a component with props that are values from the store.
*/

const WrapperApp = connect(mapStateToProps)(App);

export default WrapperApp
