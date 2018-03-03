import React, {Component} from 'react';
import ReactMapGL, {Marker, Popup, FlyToInterpolator} from 'react-map-gl';

export default class MapPopup extends Component {

  render() {

    return (

      <div>
        <Popup
          latitude={this.props.latitude}
          longitude={this.props.longitude}
          closeButton={true}
          anchor="bottom"
        >
          <div>Mark New Anchorage Here?</div>
        </Popup>
      </div>

    );
  }
}
