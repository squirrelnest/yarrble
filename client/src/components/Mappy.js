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
        zoom: 1
      }
    };
  }

  render() {

    const markers = this.props.locations.map((loc) => (
      <Link
        to={ `/locations/${loc.id}` }
        key={ loc.id }>
        <Marker
          latitude={loc.lat}
          longitude={loc.lon}
          location_id={loc.id}
          key={loc.id}
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
          width={this.props.width}
          height={this.props.height}
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
