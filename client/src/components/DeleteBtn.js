import React, { Component } from 'react';
import Delete from 'material-ui/svg-icons/action/delete';
import ListItemIcon from 'material-ui/List';
import IconButton from 'material-ui/IconButton';

export default class DeleteBtn extends Component {

  render() {

    return (
      <ListItemIcon>
        <IconButton
            onClick={this.props.handleClick}
            style={{visibility: this.props.visibility}}
        >
            <Delete
              hoverColor={'f44336'}
            />
        </IconButton>
      </ ListItemIcon>

    );
  }
}
