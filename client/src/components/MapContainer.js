import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  marginRight: 20,
};

const MAPBOX_TOKEN = 'pk.eyJ1IjoiemVya29uaXVtIiwiYSI6ImNqZDE3MGFncDJtNjUyeG5zZGMwczMxcmEifQ.e0Pxb8cdU5NiEobS_o6zSg';

export default class MapContainer extends Component {

  state = {
    viewport: {
      width: window.innerWidth*0.5,
      height: window.innerHeight*0.7,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };

  render() {
    return (
      <div className="map-container">
        <FloatingActionButton style={style} className="fab">
          <ContentAdd />
        </FloatingActionButton>
        <ReactMapGL
          {...this.state.viewport}
          onViewportChange={(viewport) => this.setState({viewport})}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        />
      </div>
    );
  }
}
