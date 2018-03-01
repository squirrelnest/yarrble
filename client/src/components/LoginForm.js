import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import Dialog from 'material-ui/Dialog';

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

export default class LoginForm extends Component {

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
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {

    return (
/*
      <Dialog
        title="Log In"
        modal={false}
        open={this.state.open}
        onRequestClose={this.handleClose}
      >
*/

      <form
        style={styles}
        onSubmit={ (event) => {
            event.preventDefault();
            this.props.handleSubmit(this.state);
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
          onClick={this.props.handleToggle}
        />

      </form>

/*      </Dialog>  */

    );
  }
}
