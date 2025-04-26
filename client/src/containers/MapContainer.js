import React, { Component } from 'react';
// import Mappy from '../components/Mappy.js';
import MapboxGL from '../components/MapboxGL.js';
import FabButton from '../components/Fab.js';

export default class MapContainer extends Component {

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

        <FabButton 
          handleToggle={this.props.handleToggle}
          sx={{
            marginBottom: "20px"
          }}
        />

      </div>
    );
  }
}
