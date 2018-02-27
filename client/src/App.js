import React, { Component } from 'react';
import './css/index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import NavBar from './components/NavBar';
import Tabley from './components/Table';
import Listy from './components/Listy';
import IndexPage from './containers/IndexPage';
import { fetchLocations } from './actions/thunks';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      locations: this.props.store.getState().locationReducer.locations,
    }
  }

  componentDidMount() {
    console.log(this.state)
    console.log(this.props)
    console.log(this.props.store.getState().locationReducer.locations)

/*
    this.props.fetchLocations()
*/

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
                <Route exact path="/nearby" render={() => <Listy store={this.props.store} locations={this.state.locations} />} />
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

/*
connect() returns a higher order component that listens for all of the redux store changes
and renders you a component with props that are values from the store.
*/

const WrapperApp = connect(mapStateToProps, {fetchLocations})(App);

export default WrapperApp
