import PlaceIcon from '@mui/icons-material/Place';
import * as React from 'react';
import Map, { Marker } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = "pk.eyJ1IjoiemVya29uaXVtIiwiYSI6ImNqZDE3MGFncDJtNjUyeG5zZGMwczMxcmEifQ.e0Pxb8cdU5NiEobS_o6zSg";

export default function MapboxGL(props) {
  let markers = props.locations.map((loc) => 
    <Marker
      longitude={loc.lon}
      latitude={loc.lat}
      anchor="bottom"
      onClick={() => window.location.href = `/locations/${loc.id}` }
    >
      <PlaceIcon
        hoverColor={'#E91E63'}
        color="primary"
        fontSize="large"
      />
    </Marker>
  )

  return (
    <Map
      mapboxAccessToken={MAPBOX_TOKEN}
      initialViewState={{
        longitude: 5,
        latitude: 34,
        zoom: 1.5
      }}
      mapStyle="mapbox://styles/mapbox/light-v9"
      style={{
        width: window.innerWidth < 700 ? window.innerWidth : window.innerWidth/2,
        height: window.innerWidth < 700 ? window.innerHeight/2 : window.innerHeight - 60,
      }}
    >
      { markers }
    </Map>
  )
}
