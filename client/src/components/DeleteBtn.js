import React, { Component } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export default class DeleteBtn extends Component {

  render() {

    return (
      <IconButton
        style={{ visibility: this.props.visibility }}
        onClick={this.props.handleClick}
        size="large">
        <DeleteIcon
          hoverColor={'f44336'}
        />
      </IconButton>
    );
  }
}
