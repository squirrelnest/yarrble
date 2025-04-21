import React, { Component } from 'react';
import IconButton from '@mui/material/IconButton';
import ModeEdit from '@mui/material/svg-icons/editor/mode-edit';

export default class EditBtn extends Component {

  render() {

    return (
      <IconButton
        style={{ visibility: this.props.visibility }}
        onClick={this.props.handleClick}
        size="large">
        <ModeEdit hoverColor={'f44336'} />
      </IconButton>
    );
  }
}
