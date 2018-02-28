import React, { Component } from 'react';
import MapContainer from './MapContainer';
import LocationList from '../components/LocationList';
import NewLocationForm from '../components/NewLocationForm';
import { removeLocation } from '../actions/locationActions';
import { connect } from 'react-redux';
import { createLocation, deleteLocation } from '../actions/thunks';

export class IndexPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  onRequestChange = (open) => {
    console.log('onRequestChange');
    this.setState({open});
  };

  render() {

    return (
      <div className="row" style={{ height: (window.innerHeight * 0.9) }}>
        <MapContainer handleToggle={this.handleToggle} />
        <LocationList locations={this.props.locations} handleClick={this.props.deleteLocation} />
        <NewLocationForm handleSubmit={this.props.createLocation} open={this.state.open} onRequestChange={this.onRequestChange} handleToggle={this.handleToggle}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
           createLocation: (formData) => dispatch(createLocation(formData)),
           removeLocation: (location_id) => dispatch(removeLocation(location_id)),
           deleteLocation: (location_id) => dispatch(deleteLocation(location_id))
          }
}

export default connect(null, mapDispatchToProps)(IndexPage)
