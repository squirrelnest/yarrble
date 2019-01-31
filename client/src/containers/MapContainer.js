import React, { Component } from 'react';
// import Mappy from '../components/Mappy.js';
import MapboxGL from '../components/MapboxGL.js';
import Fab from '../components/Fab.js';

export default class MapContainer extends Component {

  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({
        width: this.props.width
      })
    }
  }

  render() {
    return (
      <div className="map-container" style={{ height: window.innerWidth < 700 ? this.props.height*0.5 : this.props.height*0.92 }}>

        <MapboxGL
          width={window.innerWidth < 700 ? this.props.width : this.props.width*0.5}
          height={window.innerWidth < 700 ? this.props.height*0.5 : this.props.height*0.92}
          locations={this.props.locations}
          lon={this.props.lon}
          lat={this.props.lat}
          handleMapClick={this.props.handleMapClick}
        />

        <Fab handleToggle={this.props.handleToggle} />

      </div>
    );
  }
}
