import React, {Component} from 'react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import IconMenu from '@mui/material/IconMenu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import MoreVertIcon from '@mui/material/svg-icons/navigation/more-vert';
import { withRouter } from 'react-router-dom';
import { logout, refreshAuth, getUser } from '../actions/authActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import anchor from '../img/anchor.svg';

class Login extends Component {
  static muiName = 'Button';

  handleClick = () => {
    this.props.logout()
  }

  render() {
    return (
      <Link to="/login"><Button variant="text" {...this.props} label="Login"/></Link>
    )
  }
}

class Logged extends Component {

  componentDidMount() {
    this.props.getUser();
  }

  handleClick = () => {
    window.localStorage.clear()
    this.props.logout()
  }

  render() {
    return (
      <div style={{display: 'flex'}}>
        <div style={{color: 'white', margin: 'auto'}}>Hi, {this.props.username}</div>
        <IconMenu
          iconButtonElement={<IconButton size="large"><MoreVertIcon color='white' /></IconButton>}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText="My Reviews" href="/myreviews" />
          <MenuItem primaryText="Sign out" href="/login" onClick={this.handleClick}/>
        </IconMenu>
      </div>
    );
  }
}

Logged.muiName = 'IconMenu';

/* Taking advantage of the composability of the `AppBar` to render different components depending on application state. */

class NavBar extends Component {

  componentDidMount() {
    if (window.localStorage.jwt) {
      this.props.refreshAuth()
    }
  }

  handleClick = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <AppBar
        title="Yarrble"
        onTitleClick={this.handleClick}
        iconElementLeft={<IconButton onClick={this.handleClick} size="large"><img src={anchor} alt="anchor" className="light"></img></IconButton>}
        iconElementRight={this.props.authenticated ? <LoggedConnected /> : <Login />}
      />
    );
  }
}

// CONNECT COMPONENTS TO REDUX STORE

const mapStateToProps = (state) => {

  return {
    errorMessage: state.auth.error,
    authenticated: state.auth.authenticated,
    username: state.auth.username || []
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    logout: () => dispatch(logout()),
    refreshAuth: () => dispatch(refreshAuth()),
    getUser: () => dispatch(getUser())
  }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))

export const LoggedConnected = connect(mapStateToProps, mapDispatchToProps)(Logged)
