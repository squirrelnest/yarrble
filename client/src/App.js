import React, { Component } from 'react';
import './css/index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import NavBar from './components/NavBar';
import MyReviews from './containers/MyReviews';
import Home from './containers/Home';
import ShowLocation from './containers/ShowLocation';
import LoginContainer from './containers/LoginContainer';
import RegistrationContainer from './containers/RegistrationContainer';
import { connect } from 'react-redux';
import { getUser } from './actions/authActions';
import { createRoot } from 'react-dom/client';

import 'babel-polyfill';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import yomama from './reducers/index';
import { fetchLocations } from './actions/locationActions';
import './functions/currentPosition';

const container = document.getElementById('root');
const root = createRoot(container); 

let store = configureStore({
  reducer: yomama
});

store.dispatch(fetchLocations())

/* Provider exposes store so you can pass it through as a prop on context.
   This allows components to subscribe to store updates and dispatch actions */

export class App extends Component {
  render() {

    const theme = createTheme({
      palette: {
        primary: {
          main: "#40e0d0",
        },
      },
    });
    
    return (
      <Provider store={store}>
        <div className="App" store={store}>
          <ThemeProvider theme={theme}>
            <div>
              <Router>
                <div>
                  <NavBar store={this.props.store}/>
                  <Routes>
                    <Route exact path="/" render={() => <Home store={this.props.store} />} />
                    <Route path={`/locations/:locationId`} component={ ShowLocation } />
                    <Route exact path="/myreviews" render={() => <MyReviews store={this.props.store} />} />
                    <Route exact path="/login" component={ LoginContainer } />
                    <Route exact path="/signup" component={ RegistrationContainer } />

                  </Routes>
                </div>
              </Router>
            </div>
          </ThemeProvider>
        </div>
      </Provider>
    );
  }
}

root.render(<App />)

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(getUser())
  }
}

const mapStateToProps = (state) => {
  return {
    locations: state.locations.locations,
    reviews: state.reviews.reviews,
    auth: state.auth || {}
  }
}

/*
connect() returns a higher order component that listens for redux store changes
and renders a component with props that are values from the store.
*/

const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default WrapperApp
