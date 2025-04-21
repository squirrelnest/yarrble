import React, {Component} from 'react';
import { AppBar, Toolbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { logout, refreshAuth, getUser } from '../actions/authActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import anchor from '../img/anchor.svg';
import { withRouter } from '../functions/withRouter';

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
        <MenuIcon
          iconButtonElement={<IconButton size="large"><MoreVertIcon color='white' /></IconButton>}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText="My Reviews" href="/myreviews" />
          <MenuItem primaryText="Sign out" href="/login" onClick={this.handleClick}/>
        </MenuIcon>
      </div>
    );
  }
}

Logged.muiName = 'MenuIcon';

/* Taking advantage of the composability of the `AppBar` to render different components depending on application state. */

class NavBar extends Component {

  componentDidMount() {
    if (window.localStorage.jwt) {
      this.props.refreshAuth()
    }
  }

  handleClick = () => {
    window.history.pushState({}, "", '/')
  }

  render() {
    return (
      <AppBar
        title="Yarrble"
        onClick={this.handleClick}
      >
        <Toolbar>
          <IconButton onClick={this.handleClick} size="large">
            <img src={anchor} alt="anchor" className="light" />
          </IconButton>
          { this.props.authenticated ? <LoggedConnected /> : <Login /> }
        </Toolbar>
      </AppBar>
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
