import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiemVya29uaXVtIiwiYSI6ImNqZDE3MGFncDJtNjUyeG5zZGMwczMxcmEifQ.e0Pxb8cdU5NiEobS_o6zSg';

export default class Mappy extends Component {

  state = {
    viewport: {
      width: this.props.width*0.5,
      height:  this.props.height*0.91,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 0
    }
  };

  render() {
    return (
      <div>
        <ReactMapGL
          {...this.state.viewport}
          onViewportChange={(viewport) => this.setState({viewport})}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        />
      </div>
    );
  }
}
