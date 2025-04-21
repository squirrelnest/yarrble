import React, { Component } from 'react';
import { Button, TextField } from '@mui/material';
import { login } from '../actions/authActions';
import { connect } from 'react-redux';
import { Navigate, Link } from 'react-router';
import classes from '../css/LoginForm.module.css';

export class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: '',
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit() {
    this.props.login(this.state);
  }

  errorMessage() {
    if (this.props.errorMessage) {
      return (
        <div style={{ color: '#ff0000', paddingTop: '20px' }}>
          <p>{this.props.errorMessage}</p>
        </div>
      );
    }
  }

  renderRedirect = () => {
    if (this.props.authenticated) {
      return <Navigate to='/' />
    }
  }

  render() {
    return (
      <div className={classes.formContainer}>

        { this.props.newregistration === true ?
        <div>
          <p>Thanks for signing up, {this.props.username}</p>
          <p>Now log in to your brand-spanking new account!</p>
        </div>
        : null }

        <form
          onSubmit={ (event) => {
              event.preventDefault();
              this.handleSubmit(this.state);
            }
          }
          className={classes.loginForm}
        >

          <TextField
            name="email"
            label="Email"
            style={{ width: '100%' }}
            onChange={(event) => this.handleChange(event)}
          />

          <br />

          <TextField
            name="password"
            type="password"
            label="Password"
            style={{ width: '100%' }}
            onChange={(event) => this.handleChange(event)}
          />

          <br />
          <br />

          <Button
            variant="contained"
            type="submit"
            color="primary"
            sx={{
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            }}
          >
            LOGIN
          </Button>

          {this.renderRedirect()}
          {this.errorMessage()}

        </form>

        <Link to='/signup' className='link'>
          <p>Don't have an account? Sign up!</p>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    errorMessage: state.auth.error,
    authenticated: state.auth.authenticated,
    newregistration: state.auth.newregistration,
    username: state.auth.username
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    login: (loginData) => dispatch(login(loginData)),
  }

}

export default (connect(mapStateToProps, mapDispatchToProps)(LoginForm));
