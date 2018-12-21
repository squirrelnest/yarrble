import React, { Component } from 'react';
import MapContainer from './MapContainer';
import LocationList from '../containers/LocationList';
import NewLocationForm from '../components/NewLocationForm';
import { connect } from 'react-redux';
import { createLocation, deleteLocation, postOfflineData } from '../actions/locationActions';

export class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      width: window.innerWidth,
      height: window.innerHeight,
      lon: 12.56737,
      lat: 41.87194, /* Italy */
      isOnline: false
    };
  }

  componentDidMount() {
    if (window.navigator.onLine) { this.isOnline() }
    window.addEventListener('resize', this.resizeMap)
    window.addEventListener('online', () => {this.isOnline()} )
    window.addEventListener('offline', () => {this.isOffline()} )
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeMap)
    window.removeEventListener('online', () => {this.isOnline()} )
    window.removeEventListener('offline', () => {this.isOffline()} )
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  handleRequestChange = () => {
    this.setState({open: false});
  };

  isOnline = () => {
    this.setState({
      isOnline: true
    })
    this.props.postOfflineData()
    localStorage.removeItem('drafts');
    console.log('online')
  }

  isOffline = () => {
    this.setState({
      isOnline: false
    })
    console.log('offline')
  }

  resizeMap = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

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

  handleSubmit = (locationData) => {
    this.props.createLocation(locationData)
    this.setState({
      open: false
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
          handleSubmit={this.handleSubmit}
          open={this.state.open}
          handleRequestChange={this.handleRequestChange}
          isOnline={this.state.isOnline}
        />

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    locations: state.locations.locations || [],
    reviews: state.reviews.reviews || [],
  }
}

function mapDispatchToProps(dispatch) {
  return {
           createLocation: (locationData) => dispatch(createLocation(locationData)),
           deleteLocation: (location_id) => dispatch(deleteLocation(location_id)),
           postOfflineData: () => dispatch(postOfflineData())
         }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
