import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import Place from 'material-ui/svg-icons/maps/place';
import { Link } from 'react-router-dom';

// jest.mock("mapbox-gl", () => { return {} });

const MAPBOX_TOKEN = "pk.eyJ1IjoiemVya29uaXVtIiwiYSI6ImNqZDE3MGFncDJtNjUyeG5zZGMwczMxcmEifQ.e0Pxb8cdU5NiEobS_o6zSg";

export default class MapboxGL extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 1.5
    };
  }

  componentDidUpdate(prevProps) {
    if (this.state.map && (this.props.locations && this.props.locations !== prevProps.locations)) {
      this.renderMarkers(this.props.locations, this.state.map)
    }
  }

  componentDidMount() {
    const { lng, lat } = this.state;

    mapboxgl.accessToken = MAPBOX_TOKEN;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/light-v9",
      center: [lng, lat]
    });

    this.setState({map: map})
    this.renderMarkers((this.props.locations || []), map)
    
    map.on("move", () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  renderMarkers = (locations, map) => {
    console.log('rendering markers');
    locations.forEach((loc) => {
      // create a HTML element for each feature
      let el = <Link
        to={ `/locations/${loc.id}` }
        key={ loc.id }>
          <Place
            hoverColor={'#E91E63'}
            color='#00BCD4'
          />
      </Link>;

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
      .setLngLat([loc.lon, loc.lat])
      .addTo(map);
    });
  }

  render() {
    return (
      <div>
        <div
          style={{width: this.props.width, height:this.props.height }}
          ref={el => (this.mapContainer = el)}
          onClick={(event) => this.props.handleMapClick(event, event.lngLat)}
        />
      </div>
    );
  }
}
