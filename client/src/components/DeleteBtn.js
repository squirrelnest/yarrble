import React, { Component } from 'react';
import Delete from 'material-ui/svg-icons/action/delete';
import ListItemIcon from 'material-ui/List';
import { removeLocation } from '../actions/locationActions';

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

  handleClick = (event, location_id) => {
    event.preventDefault();
    console.log(event.target.id)
    alert("Are you sure you want to delete this?");
    this.props.store.dispatch(removeLocation(location_id));
  }

  render() {

    return (
      <ListItemIcon>
        <Delete
          location_id={this.props.location_id}
          hoverColor={'f44336'}
          onClick={ (event, location_id) => {this.handleClick(event, location_id)} }
          style={{visibility: this.props.visibility}}
        />
      </ ListItemIcon>

    );
  }
}
