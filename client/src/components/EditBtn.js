import React, { Component } from 'react';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

export default class EditBtn extends Component {

  render() {

    return (
      <IconButton
        style={{ visibility: this.props.visibility }}
        onClick={this.props.handleClick}
        size="large">
        <EditIcon hoverColor={'f44336'} />
      </IconButton>
    );
  }
}
