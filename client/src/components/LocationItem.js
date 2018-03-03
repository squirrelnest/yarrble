import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ListItem } from 'material-ui/List';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { deleteLocation } from '../actions/thunks';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';

export default class LocationItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      location_id: this.props.location_id,
      visibility: 'hidden',
      popoverOpen: false,
      NewReviewFormOpen: false,
    }
  }

  componentDidMount() {
    this.setState({ anchorEl: ReactDOM.findDOMNode(this) })
  }

  handleAddReview = (event, location_id) => {
    event.preventDefault();
    this.setState({
      popoverOpen: false,
    });
    this.props.handleAdd(location_id);
  }

  openPopover = (event) => {
  // This prevents ghost click.
    event.preventDefault();
    event.stopPropagation(); // don't toggle showing reviews
    this.setState({
      popoverOpen: true,
    });
  };

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

  handleClose = (event) => {
    this.setState({ popoverOpen: false });
  }

  render() {

    return (

      <div className="list-item">

        <ListItem
            leftIcon={<MoreVertIcon onClick={this.openPopover} hoverColor={'f44336'} visibility={this.state.visibility}/>}
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
            onClick={(event) => this.props.moveMap(this.props.lon, this.props.lat)}
            key={this.props.location_id}
            name={this.props.name}
            primaryText={`${this.props.primaryText}, ${this.props.country}`}
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
          />
          <Popover
              key="menu"
              open={this.state.popoverOpen}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
              onRequestClose={this.handleClose}
          >
            <MenuItem key="addReview" primaryText="Add Review" href="" onClick={(event) => this.handleAddReview(event, this.props.location_id)} />
            <MenuItem key="deleteLocation" primaryText="Delete Location" href="" onClick={this.handleDelete} />
          </Popover>

      </div>
    );
  }
}
