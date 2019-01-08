import React, {Component} from 'react';
import MapboxGL from './MapboxGL';

export default class Mappy extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 41.87194, /* Italy */
        longitude: 12.56737,
        zoom: 1
      }
    };
  }

  render() {
    return (
      <MapboxGL
        {...this.props}
        locations={this.props.locations}
        onViewportChange={(viewport) => this.setState({ viewport })}
        onClick={(event) => this.props.handleMapClick(event, event.lngLat)}
      />
    );
  }
}
