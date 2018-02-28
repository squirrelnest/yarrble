import React, { Component } from 'react';
import Delete from 'material-ui/svg-icons/action/delete';
import ListItemIcon from 'material-ui/List';
import IconButton from 'material-ui/IconButton';

const iconStyles = {
  marginRight: 24,
  marginLeft: 0,
  padding: '16px 56px 16px 72px',
  position: 'relative',
  display: 'inline-block'
};

export default class DeleteBtn extends Component {

  constructor(props) {
    super(props);
  }

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
