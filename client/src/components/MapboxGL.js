import React from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiemVya29uaXVtIiwiYSI6ImNqZDE3MGFncDJtNjUyeG5zZGMwczMxcmEifQ.e0Pxb8cdU5NiEobS_o6zSg";
mapboxgl.accessToken = MAPBOX_TOKEN;

class MapboxGL extends React.Component {
  constructor(props: Props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 1.5
    };
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
  }

  render() {
    const { lng, lat, zoom } = this.state;

    return (
      <div>
        <div width={this.props.width} height={this.props.height}>
          <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
        </div>
        <div ref={el => (this.mapContainer = el)} />
      </div>
    );
  }
}
