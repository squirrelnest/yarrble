import React, { Component } from 'react';
import MapContainer from './MapContainer';
import LocationList from '../containers/LocationList';
import NewLocationForm from '../components/NewLocationForm';
import { connect } from 'react-redux';
import { createLocation, deleteLocation } from '../actions/thunks';

export class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  onRequestChange = (open) => {
    console.log('onRequestChange');
    this.setState({open});
  };


  handleResize(event) {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize.bind(this));
  }


  render() {

    return (
      <div className="row" style={{ height: (window.innerHeight * 0.92) }}>
        <MapContainer handleToggle={this.handleToggle} width={this.state.width} height={this.state.height} />
        <LocationList locations={this.props.locations} handleClick={this.props.deleteLocation} store={this.props.store} width={this.state.width} height={this.state.height} />
        <NewLocationForm handleSubmit={this.props.createLocation} open={this.state.open} onRequestChange={this.onRequestChange} handleToggle={this.handleToggle}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
           createLocation: (formData) => dispatch(createLocation(formData)),
           deleteLocation: (location_id) => dispatch(deleteLocation(location_id))
          }
}

export default connect(null, mapDispatchToProps)(Home)
