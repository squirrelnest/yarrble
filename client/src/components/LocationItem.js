import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ListItem } from '@mui/material/List';
import MoreVertIcon from '@mui/material/svg-icons/navigation/more-vert';
import { deleteLocation } from '../actions/locationActions';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class LocationItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
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
    this.props.deleteLocation(this.props.location_id);
  }

  handleClose = (event) => {
    this.setState({ popoverOpen: false });
  }

  render() {

    const { auth } = this.props

    return (

      <div className="list-item">

        <ListItem
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
            onClick={(event) => this.props.moveMap(event, this.props.lon, this.props.lat)}
            key={this.props.location_id}
            name={this.props.name}
            primaryText={
              <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '30px', width: '100%' }}>
                <span><Link to={`/locations/${this.props.location_id}`} style={{ color: "#00BCD4" }}>{this.props.primaryText}</Link>, {this.props.country}</span>
                <MoreVertIcon onClick={this.openPopover} hoverColor={'f44336'} visibility={this.state.visibility}/>
              </div>
            }
            initiallyOpen={this.props.initiallyOpen}
            primaryTogglesNestedList={true}
            nestedItems={this.props.nestedItems.map( (review) =>
              <ListItem
                insetChildren={true}
                key={review.id}
                review_id={review.id}
                primaryText= { '"' + review.content + '"' }
               />
             )
            }
          />
          <Popover
              key="menu"
              open={this.state.popoverOpen}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              onRequestClose={this.handleClose}
          >
            <MenuItem key="addReview" primaryText="Add Review" href="" onClick={(event) => this.handleAddReview(event, this.props.location_id)} />
          { auth.admin && <MenuItem key="deleteLocation" primaryText="Delete Location" href="" onClick={this.handleDelete} /> }
          </Popover>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth || {}
  };
}

const mapDispatchToProps = (dispatch) => {
  return { deleteLocation: (location_id) => dispatch(deleteLocation(location_id)) }
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationItem);
