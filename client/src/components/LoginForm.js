import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { login } from '../actions/authActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const styles = {
  width: '33%',
  height: '100%',
  position: 'absolute',
  top:0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  button: {
    marginLeft: '20px',
  },
};

export class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: 'test',
      password: 'test',
      email: 'test@test.com',
    };
  }

  handleClick(event) {
    console.log('trying to log in')
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit() {
    console.log(this.state);
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

      <form
        style={styles}
        onSubmit={ (event) => {
            event.preventDefault();
            this.handleSubmit(this.state);
          }
        }
      >

        <TextField
          name="username"
          hintText="Username"
          floatingLabelText="Username"
          onChange={(event) => this.handleChange(event)}
        />

        <br />

        <TextField
          name="email"
          hintText="Email"
          floatingLabelText="Email"
          onChange={(event) => this.handleChange(event)}
        />

        <br />

        <TextField
          name="password"
          type="password"
          hintText="Password"
          floatingLabelText="Password"
          onChange={(event) => this.handleChange(event)}
        />

        <br />
        <br />

        <RaisedButton
          className="submitBtn"
          label="Submit"
          type="submit"
          secondary={true}
          style={styles.button}
          onClick={this.handleClick}
        />

        {this.renderRedirect()}
        {this.errorMessage()}

      </form>

    )
  }
}

const mapStateToProps = (state) => {

  return {
    errorMessage: state.auth.error,
    authenticated: state.auth.authenticated
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    login: (loginData) => dispatch(login(loginData)),
  }

}

export default (connect(mapStateToProps, mapDispatchToProps)(LoginForm));
