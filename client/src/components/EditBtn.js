import React, { Component } from 'react';
import ListItemIcon from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
/* import { updateReview } from '../actions/reviewActions'; */

export default class EditBtn extends Component {

  handleClick = (event) => {
    event.preventDefault();
    console.log("Editing!")
/*    this.props.store.dispatch(updateReview(this.props.review_id)); */
  }

  render() {

    return (
      <ListItemIcon
        style={{ visibility: this.props.visibility }}
        onClick={this.handleClick}
      >
        <IconButton>
          <ModeEdit hoverColor={'f44336'} />
        </IconButton>
      </ ListItemIcon>

    );
  }
}
