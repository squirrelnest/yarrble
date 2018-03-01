import React, { Component } from 'react';
import { ListItem, ListItemButton } from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { deleteLocation } from '../actions/thunks';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';

export default class LocationItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visibility: 'hidden',
      open: false,
    }
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handleMouseOver = (event) => {
    this.setState({ visibility: 'visible' });
  }

  handleMouseOut = () => {
    this.setState({ visibility: 'hidden' });
  }

  handleClick = (event) => {
  // This prevents ghost click.
    event.preventDefault();
    event.stopPropagation();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleDelete = (event) => {
    event.preventDefault();
    this.props.store.dispatch(deleteLocation(this.props.location_id));
  }

  handleAdd = (event) => {
    event.preventDefault();
    /* open Add Review Form */
  }

  render() {

    return (

      <div className="list-item">
        <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.handleRequestClose}
          >
          <MenuItem primaryText="Add Review" href="" onClick={this.handleAdd} store={this.props.store} />
          <MenuItem primaryText="Delete Location" href="" onClick={this.handleDelete} />
        </Popover>

        <ListItem
            leftIcon={<MoreVertIcon onClick={this.handleClick} hoverColor={'f44336'} visibility={this.state.visibility}/>}
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
                primaryText= { '"' + review.content + '"' }
               />
            )}
          />

      </div>
    );
  }
}
