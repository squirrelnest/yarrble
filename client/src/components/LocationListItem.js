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

  render() {

    return (

      <div className="list-item">

        <ListItem
            leftIcon={
              <Delete
                location_id={this.props.location_id}
                visibility={this.state.visibility}
                hoverColor={'f44336'}
                onClick={ (event) => {
                  event.preventDefault();
                  console.log(this.props.location_id);
                  this.props.handleClick(this.props.location_id);
                  }
                }
              />
            }
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
            key={this.props.location_id}
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
