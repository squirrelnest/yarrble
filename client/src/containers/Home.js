import React, { Component } from 'react';
import MapContainer from './MapContainer';
import LocationList from '../containers/LocationList';
import NewLocationForm from '../components/NewLocationForm';
import { connect } from 'react-redux';
import { createLocation, deleteLocation } from '../actions/thunks';
import ReactMapGL from 'react-map-gl';

export class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      width: window.innerWidth,
      height: window.innerHeight,
      lon: 12.56737,
      lat: 41.87194, /* Italy */
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  onRequestChange = () => {
    this.setState({open: false});
  };

  moveMap = (event, lon, lat) => {
    event.preventDefault();
    event.stopPropagation();
    this.setState({
      lon: lon,
      lat: lat,
    });
  }

  handleMapClick = (event, lngLat) => {
    event.preventDefault();
    event.stopPropagation();
    this.setState({
      lon: lngLat[0],
      lat: lngLat[1],
    })
  }

  render() {

    return (

      <div className="row" style={{ height: (window.innerHeight * 0.92) }}>

        <MapContainer
          locations={this.props.locations}
          handleToggle={this.handleToggle}
          handleMapClick={this.handleMapClick}
          width={this.state.width}
          height={this.state.height}
          lon={this.state.lon}
          lat={this.state.lat}
        />
        <LocationList
          locations={this.props.locations}
          handleClick={this.props.deleteLocation}
          moveMap={this.moveMap}
          store={this.props.store}
          width={this.state.width}
          height={this.state.height}
          />
        <NewLocationForm
          handleSubmit={this.props.createLocation}
          open={this.state.open}
          onRequestChange={this.onRequestChange}
          handleToggle={this.handleToggle}
        />

      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
           createLocation: (formData) => dispatch(createLocation(formData)),
           deleteLocation: (location_id) => dispatch(deleteLocation(location_id))
          }
}

export default connect(null, mapDispatchToProps)(Home)
