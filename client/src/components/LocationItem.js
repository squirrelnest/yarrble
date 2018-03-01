import React, { Component } from 'react';
import { ListItem, ListItemButton } from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { deleteLocation } from '../actions/thunks';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';
import AddReviewForm from '../components/AddReviewForm';

export default class LocationItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visibility: 'hidden',
      open: false,
      addReviewFormOpen: false,
    }
  }

  handleMouseOver = (event) => {
    this.setState({ visibility: 'visible' });
  }

  handleMouseOut = () => {
    this.setState({ visibility: 'hidden' });
  }

  handleDelete = (event) => {
    event.preventDefault();
    this.props.store.dispatch(deleteLocation(this.props.location_id));
  }

  render() {

    return (

      <div className="list-item">

        <ListItem
            leftIcon={<MoreVertIcon onClick={this.props.openPopover} hoverColor={'f44336'} visibility={this.state.visibility}/>}
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
            key={this.props.location_id}
            name={this.props.name}
            primaryText={this.props.primaryText}
            initiallyOpen={this.props.initiallyOpen}
            primaryTogglesNestedList={true}
            nestedItems={this.props.nestedItems.map( (review) =>
              <ListItem
                insetChildren={true}
                key={review.id}
                review_id={review.id}
                primaryText= { '"' + review.content + '"' }
               />
            )}
            children={<Popover
                open={this.props.popoverOpen}
                anchorEl={this.state.anchorEl}
                anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                onRequestClose={this.handleRequestClose}
              >
              <MenuItem primaryText="Add Review" href="" onClick={ (event) => this.props.handleAdd(event, this.props.location_id)} />
              <MenuItem primaryText="Delete Location" href="" onClick={this.handleDelete} />
            </Popover>
            }
          />

      </div>
    );
  }
}
