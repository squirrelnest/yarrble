import React, { Component } from 'react';
import FloatingActionButton from '@mui/material/FloatingActionButton';
import ContentAdd from '@mui/material/svg-icons/content/add';

const style = {
  marginRight: 20,
  zIndex: 1000
};

export default class Fab extends Component {

  render() {
    return (
      <FloatingActionButton
        style={style}
        className="fab"
        onClick={this.props.handleToggle}
      >
        <ContentAdd />
      </FloatingActionButton>
    );
  }
}
