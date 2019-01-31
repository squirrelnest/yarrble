import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { login } from '../actions/authActions';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
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
      return <Redirect to='/' />
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
            hintText="email"
            label="Email"
            style={{ width: '100%' }}
            onChange={(event) => this.handleChange(event)}
          />

          <br />

          <TextField
            name="password"
            type="password"
            hintText="Password"
            label="Password"
            style={{ width: '100%' }}
            onChange={(event) => this.handleChange(event)}
          />

          <br />
          <br />

          <RaisedButton
            label="LOGIN"
            type="submit"
            secondary={true}
            className={classes.loginBtn}
          />

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
