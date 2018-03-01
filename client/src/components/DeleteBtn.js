import React, { Component } from 'react';
import Delete from 'material-ui/svg-icons/action/delete';
import ListItemIcon from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import { deleteReview } from '../actions/reviewActions';

export default class DeleteBtn extends Component {

  render() {

    return (

        <Delete
          hoverColor={'f44336'}
          style={{
            visibility: this.props.visibility,
          }}
          onClick={this.props.handleClick}
        />

    );
  }
}
