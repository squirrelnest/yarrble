import React, { Component } from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import Delete from 'material-ui/svg-icons/action/delete';

const iconStyles = {
  marginRight: 24,
  marginLeft: 0,
  padding: '16px 56px 16px 72px',
  position: 'relative'
};

export default class DeleteBtn extends Component {

  constructor(props) {
    super(props);
  }

  handleMouseOver = () => {
  }

  handleClick = () => {
    (console.log("clicked"))
    alert("Are you sure you want to delete this?")
  }

  render() {

    return (

        <Delete
          style={iconStyles}
        />

    );
  }
}
