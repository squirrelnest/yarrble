import React, {Component} from 'react';
import ReactMapGL, { Marker, Popup, FlyToInterpolator } from 'react-map-gl';
import Place from 'material-ui/svg-icons/maps/place';
import MapPopup from '../components/MapPopup';
import { Link } from 'react-router-dom';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiemVya29uaXVtIiwiYSI6ImNqZDE3MGFncDJtNjUyeG5zZGMwczMxcmEifQ.e0Pxb8cdU5NiEobS_o6zSg';

export default class Mappy extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 41.87194, /* Italy */
        longitude: 12.56737,
        zoom: 4
      }
    };
  }

  render() {

    const markers = this.props.locations.map((location) => (
      <Link
        to={`/locations/${location.id}`}
        key={location.id}>
        <Marker
          latitude={location.lat}
          longitude={location.lon}
          location_id={location.id}
          key={location.id}
        >
          <Place
            hoverColor={'#E91E63'}
            color='#00BCD4'
          />
        </Marker>
      </Link>
      )
    )

    return (
      <div>

        <ReactMapGL
          {...this.state.viewport}
          width={this.props.width*0.5}
          height={this.props.height*0.92}
          latitude={this.props.lat ? this.props.lat : 45}
          longitude={this.props.lon ? this.props.lon : 37}
          onViewportChange={(viewport) => this.setState({ viewport })}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          transitionDuration={0}
          transitionInterpolator={new FlyToInterpolator()}
          onClick={(event) => this.props.handleMapClick(event, event.lngLat)}
        >

        {markers}

        </ReactMapGL>
      </div>
    );
  }
}
