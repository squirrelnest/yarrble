import React, { Component } from 'react';
import Delete from '@mui/material/svg-icons/action/delete';
import IconButton from '@mui/material/IconButton';

export default class DeleteBtn extends Component {

  render() {

    return (
      <IconButton
        style={{ visibility: this.props.visibility }}
        onClick={this.props.handleClick}
        size="large">
        <Delete
          hoverColor={'f44336'}
        />
      </IconButton>
    );
  }
}
