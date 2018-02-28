import React, { Component } from 'react';
import MapContainer from './MapContainer';
import LocationList from '../components/LocationList';
import Drawery from '../components/Drawery';
import { addLocation, removeLocation } from '../actions/locationActions';
import { connect } from 'react-redux';
import { createLocation } from '../actions/thunks';

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
        <LocationList locations={this.props.locations} handleClick={this.props.removeLocation} />
        <Drawery handleSubmit={this.props.createLocation} open={this.state.open} onRequestChange={this.onRequestChange}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { addLocation: (formData) => dispatch(addLocation(formData)),
           createLocation: (formData) => dispatch(createLocation(formData)),
           removeLocation: (location_id) => dispatch(removeLocation(location_id))
          }
}

export default connect(null, mapDispatchToProps)(IndexPage)
