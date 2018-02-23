import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import Mappy from './Mappy.js';
import Fab from './Fab.js';
import Drawery from './Drawery.js';

export default class MapContainer extends Component {

  render() {
    return (
      <div className="map-container">
        <Mappy />
        <Fab handleToggle={this.props.handleToggle} />
      </div>
    );
  }
}
