import React, { Component } from 'react';
import Delete from 'material-ui/svg-icons/action/delete';
import ListItemIcon from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import { deleteReview } from '../actions/reviewActions';

export default class DeleteBtn extends Component {

  handleClick = (event) => {
    event.preventDefault();
    this.props.store.dispatch(deleteReview(this.props.review_id));
  }

  render() {

    return (
      <ListItemIcon
        style={{ visibility: this.props.visibility }}
        onClick={this.handleClick}
      >
        <IconButton>
            <Delete hoverColor={'f44336'} />
        </IconButton>
      </ ListItemIcon>

    );
  }
}
