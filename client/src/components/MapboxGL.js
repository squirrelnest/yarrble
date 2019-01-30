import React from "react";
import mapboxgl from "mapbox-gl";
import Place from 'material-ui/svg-icons/maps/place';
import { Link } from 'react-router-dom';

// jest.mock("mapbox-gl", () => { return {} });

const MAPBOX_TOKEN = "pk.eyJ1IjoiemVya29uaXVtIiwiYSI6ImNqZDE3MGFncDJtNjUyeG5zZGMwczMxcmEifQ.e0Pxb8cdU5NiEobS_o6zSg";

mapboxgl.accessToken = MAPBOX_TOKEN;

export default class MapboxGL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 1.5
    };
  }

  renderMarkers(locations) {
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
      .addTo(this.state.map);
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.locations && this.props.locations.length !== nextProps.locations.length) {
        // console.log('new' + nextProps.locations.length)
        // console.log('old' + this.props.locations.length)
        renderMarkers(nextProps.locations)
      
    }
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [lng, lat],
      zoom
    });

    map.on("move", () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
    this.setState({map: map})
    if (this.props.locations) {
      renderMarkers(nextProps.locations)
    }
  }

    // <div>
    //   <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
    // </div>

  render() {
    // const { lng, lat, zoom } = this.state;

    return (
      <div>
        <div
          style={{width: this.props.width, height:this.props.height }}
          ref={el => (this.mapContainer = el)}
        />
      </div>
    );
  }
}
