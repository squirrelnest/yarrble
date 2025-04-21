import React, { Component } from 'react';
import ListItemIcon from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import FontIcon from '@mui/material/FontIcon';
import AddCircleOutline from '@mui/material/svg-icons/content/add-circle-outline';

export default class AddBtn extends Component {

  handleClick = (event) => {
    event.preventDefault();
    console.log("Editing!")
/*    this.props.store.dispatch(updateReview(this.props.review_id)); */
  }

  render() {

    return (

        <AddCircleOutline
          review_id={this.props.review_id}
          visibility={this.props.visibility}
          hoverColor={'f44336'}
          onClick={ (event) => {
            event.preventDefault();
            console.log('add review button clicked')
      /*      this.props.handleClick(this.props.review_id); */
            }
          }
        />

    );
  }
}
