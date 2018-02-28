import React, { Component } from 'react';
import { List, ListItem, ListItemIcon } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { connect } from 'react-redux';
import DeleteBtn from './DeleteBtn';
import Delete from 'material-ui/svg-icons/action/delete';

export default class LocationListItem extends Component {

  constructor(props) {
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
    this.state = {
      visibility: 'hidden',
    }
  }

  handleMouseOver = (event) => {
    this.setState({ visibility: 'visible' });
  }

  handleMouseOut = () => {
    this.setState({ visibility: 'hidden' });
  }

  handleClick = (event) => {
    event.preventDefault();
    alert("Are you sure you want to delete this?")
  }

  render() {

    return (

      <div className="list-item">

        <ListItem
            leftIcon={
              <Delete
                visibility={this.state.visibility}
                hoverColor={'f44336'}
                onClick={ (event) => this.handleClick(event) }
              />
            }
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
            key={this.props.key}
            name={this.props.name}
            primaryText={this.props.primaryText}
            initiallyOpen={this.props.initiallyOpen}
            primaryTogglesNestedList={this.props.primaryTogglesNestedList}
            nestedItems={this.props.nestedItems.map( (review) =>
              <ListItem
                insetChildren={true}
                key={review.id}
                primaryText= { '"' + review.content + '"' }
               />
            )}
          />

      </div>
    );
  }
}
