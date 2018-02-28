import React, { Component } from 'react';
import Delete from 'material-ui/svg-icons/action/delete';
import ListItemIcon from 'material-ui/List';

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
        <Delete
          hoverColor={'f44336'}
          onClick={this.props.handleClick}
          style={{visibility: this.props.visibility}}
        />
      </ ListItemIcon>

    );
  }
}
