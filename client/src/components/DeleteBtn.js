import React, { Component } from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import Delete from 'material-ui/svg-icons/action/delete';

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

  handleClick = (event) => {
    event.preventDefault();
    alert("Are you sure you want to delete this?")
  }

  render() {

    return (

      <Delete
        hoverColor={'f44336'}
        onClick={ (event) => {this.handleClick(event)} }
        style={{iconStyles, visibility: this.props.visibility}}
      />

    );
  }
}
