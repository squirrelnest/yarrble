import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { withRouter } from 'react-router-dom';

class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Login" />
    );
  }
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="My Reviews" href="/reviews/myreviews" />
    <MenuItem primaryText="Sign out" href="/login" />
  </IconMenu>
);

Logged.muiName = 'IconMenu';

/* Taking advantage of the composability of the `AppBar` to render different components depending on application state. */

class NavBar extends Component {
  state = {
    logged: true,
  };

  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };

  handleClick = () => {
    this.props.history.push('/');
}

  render() {
    return (

        <AppBar
          title="Yarrble"
          onTitleClick={this.handleClick}
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={this.state.logged ? <Logged /> : <Login />}
        />

    );
  }
}

export default withRouter(NavBar);
