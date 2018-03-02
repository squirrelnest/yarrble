import React, {Component} from 'react';
import ReactMapGL, {Marker, FlyToInterpolator} from 'react-map-gl';
import BeachAccess from 'material-ui/svg-icons/places/beach-access';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiemVya29uaXVtIiwiYSI6ImNqZDE3MGFncDJtNjUyeG5zZGMwczMxcmEifQ.e0Pxb8cdU5NiEobS_o6zSg';

export default class Mappy extends Component {

  state = {
    viewport: {
      width: window.innerWidth*0.5,
      height:  window.innerHeight*0.92,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 0
    }
  };

  handleClick(event) {
    this.setState({
      viewport: {
        ...this.state.viewport,
        longitude: event.lngLat[0],
        latitude: event.lngLat[1],
      }
    })
  }

  render() {

    const markers = this.props.locations.map((location) => (
      <Marker
        latitude={location.lat}
        longitude={location.lon}
        location_id={location.id}
        key={location.id}
      >
        <BeachAccess hoverColor={'f44336'} />
      </Marker>
      )
    )

    return (
      <div style={{ width: (this.props.width* 0.5) }}>

        <ReactMapGL
          {...this.state.viewport}
          onViewportChange={(viewport) => this.setState({viewport})}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          transitionDuration={0}
          transitionInterpolator={new FlyToInterpolator()}
          onClick={(event) => this.handleClick(event)}
        >

        {markers}

        </ReactMapGL>
      </div>
    );
  }
}
