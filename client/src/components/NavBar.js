import React, {Component} from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AnchorIcon from '@mui/icons-material/Anchor';
import { logout, refreshAuth, getUser } from '../actions/authActions';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { withRouter } from '../functions/withRouter';

export const Login = () => {
  return (
    <Link to="/login"><Button color="tertiary">Login</Button></Link>
  )
}

export const Logged = (props) => {
  let handleClick = () => {
    window.localStorage.clear()
    props.logout()
  }

  return (
    <Toolbar>
      <Typography color='tertiary'>Hi {props.username}</Typography>
      <IconButton size='large'><MoreVertIcon color='secondary' /></IconButton>
      <Button
        variant='text'
        color='tertiary'
        href='/myreviews'
        sx={{
          '&:hover': {
            backgroundColor: 'primary.dark',
          },
        }}>My Reviews</Button>
      <Typography href='/login' onClick={handleClick}>Sign out</Typography>
    </Toolbar>
  );
}


/* Taking advantage of the composability of the `AppBar` to render different components depending on application state. */

export const NavBar = (props) => {
  let handleClick = () => {
    window.history.pushState({}, "", '/')
  }

  return (
    <AppBar
      position="sticky"
      onClick={handleClick}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          aria-label="menu"
          sx={{ mr: 2 }}
          href="/"
        >
          <AnchorIcon color="tertiary"/>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          YARRBLE
        </Typography>
        
        { props.authenticated ? <LoggedConnected /> : <Login /> }
      </Toolbar>
    </AppBar>
  );
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
