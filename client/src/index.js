// import 'babel-polyfill';
// import { configureStore } from '@reduxjs/toolkit';
// import { Provider } from 'react-redux';
// import yomama from './reducers/index';
// import { fetchLocations } from './actions/locationActions';
// import './functions/currentPosition';

// let store = configureStore({
//   reducer: yomama
// });

// store.dispatch(fetchLocations())

// /* Provider exposes store so you can pass it through as a prop on context.
//    This allows components to subscribe to store updates and dispatch actions */

// render(
//     <Provider store={store}>
//       <WrapperApp store={store} />
//     </Provider>,
//     document.getElementById('root')
// )

import React, { Component } from 'react';
import './css/index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router';
import NavBar from './components/NavBar';
import MyReviews from './containers/MyReviews';
import Home from './containers/Home';
import ShowLocation from './containers/ShowLocation';
import { LoginContainer } from './containers/LoginContainer';
import RegistrationContainer from './containers/RegistrationContainer';
import { connect } from 'react-redux';
import { getUser } from './actions/authActions';
import { createRoot } from 'react-dom/client';

import 'babel-polyfill';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { fetchLocations } from './actions/locationActions';
import './functions/currentPosition';

import locationReducer from './reducers/locationReducer';
import reviewReducer from './reducers/reviewReducer';
import authReducer from './reducers/authReducer';

const container = document.getElementById('root');
const root = createRoot(container); 

let store = configureStore({
  reducer: {
    locations: locationReducer,
    reviews: reviewReducer,
    auth: authReducer
  }
});

store.dispatch(fetchLocations())

/* Provider exposes store so you can pass it through as a prop on context.
   This allows components to subscribe to store updates and dispatch actions */

export const App = () => {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#00BCD4',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#cc83d4',
        contrastText: '#FFFFFF',
      },
      tertiary: {
        main: '#FFFFFF',
      }
    },
  });
    
  return (
    <Provider store={store}>
      <div className="app" store={store}>
        <ThemeProvider theme={theme}>
          
            <BrowserRouter>
              <NavBar store={store}/>
              <Routes>
                <Route exact path="/" element={ <Home store={store} /> } />
                <Route path={`/locations/:locationId`} element={ <ShowLocation /> } />
                <Route exact path="/myreviews" element={ <MyReviews store={store} /> } />
                <Route exact path="/login" element={ <LoginContainer /> } />
                <Route exact path="/signup" element={ <RegistrationContainer/> } />
              </Routes>
            </BrowserRouter>
          
        </ThemeProvider>
      </div>
    </Provider>
  );
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
