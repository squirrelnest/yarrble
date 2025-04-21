import React, { Component } from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const style = {
  marginRight: 20,
  zIndex: 1000
};

export default class FabButton extends Component {

  render() {
    return (
      <Fab
        style={style}
        className="fab"
        onClick={this.props.handleToggle}
      >
        <AddIcon />
      </Fab>
    );
  }
}
