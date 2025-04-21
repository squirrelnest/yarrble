import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { register } from '../actions/authActions';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import classes from '../css/RegistrationForm.module.css';

export class RegistrationForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
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
    this.props.register(this.state);
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
    if (this.props.newregistration) {
      return <Navigate to='/login' />
    }
  }

  render() {
    return (

      <div className={classes.formContainer}>

        <form
          className={classes.registrationForm}
          onSubmit={ (event) => {
              event.preventDefault();
              this.handleSubmit(this.state);
            }
          }
        >

          <TextField
            name="username"
            hintText="username"
            label="Username"
            onChange={(event) => this.handleChange(event)}
          />

          <br />

          <TextField
            name="email"
            hintText="email"
            label="Email"
            onChange={(event) => this.handleChange(event)}
          />

          <br />

          <TextField
            name="password"
            type="password"
            hintText="Password"
            label="Password"
            onChange={(event) => this.handleChange(event)}
          />

          <br />
          <br />

          <Button variant="contained"
            label="SIGN UP"
            type="submit"
            secondary={true}
            className={classes.registrationBtn}
          />

          {this.renderRedirect()}
          {this.errorMessage()}

        </form>

      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    errorMessage: state.auth.error,
    newregistration: state.auth.newregistration
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    register: (registrationData) => dispatch(register(registrationData)),
  }

}

export default (connect(mapStateToProps, mapDispatchToProps)(RegistrationForm));
