import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import MapContainer from './MapContainer.js';
import Listy from '../components/Listy.js';
import Drawery from '../components/Drawery.js';

export default class IndexPage extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div className="row">
        <MapContainer handleToggle={this.handleToggle}/>
        <Listy />
        <Drawery open={this.state.open}/>
      </div>
    );
  }
}