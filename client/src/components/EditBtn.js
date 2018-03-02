import React, { Component } from 'react';
import ListItemIcon from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';

export default class EditBtn extends Component {

  render() {

    return (
      <ListItemIcon
        style={{ visibility: this.props.visibility }}
        onClick={this.props.handleClick}
      >
        <IconButton>
          <ModeEdit hoverColor={'f44336'} />
        </IconButton>
      </ ListItemIcon>

    );
  }
}
