import React, { Component } from 'react';
import MapContainer from './MapContainer.js';
import Listy from '../components/Listy.js';
import Drawery from '../components/Drawery.js';

export default class IndexPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div className="row" style={{ height: (window.innerHeight * 0.9) }}>
        <MapContainer handleToggle={this.handleToggle}/>
        <Listy locations={this.props.locations} />
        <Drawery open={this.state.open}/>
      </div>
    );
  }
}
