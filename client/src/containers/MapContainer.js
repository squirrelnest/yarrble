import React, { Component } from 'react';
import Mappy from '../components/Mappy.js';
import Fab from '../components/Fab.js';

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
