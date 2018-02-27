import React, { Component } from 'react';
import MapContainer from './MapContainer.js';
import Listy from '../components/Listy.js';
import Drawery from '../components/Drawery.js';
import { addLocation } from '../actions/locationActions';
import { connect } from 'react-redux';

export class IndexPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  onRequestChange = (open) => {
    console.log('onRequestChange');
    this.setState({open});
  };

  render() {

    return (
      <div className="row" style={{ height: (window.innerHeight * 0.9) }}>
        <MapContainer handleToggle={this.handleToggle} />
        <Listy locations={this.props.locations} />
        <Drawery handleSubmit={this.props.addLocation} open={this.state.open} onRequestChange={this.onRequestChange}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { addLocation: (formData) => dispatch(addLocation(formData)) }
}

export default connect(null, mapDispatchToProps)(IndexPage)
