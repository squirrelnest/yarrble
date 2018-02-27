import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import Subheader from 'material-ui/Subheader';
import { addLocation } from '../actions/locationActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const styles = {
  root: {
    display: 'flex',
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    margin: '20px',
  },
  checkboxblock: {
    marginTop: '40px',
  },
  checkbox: {
    marginBottom: 16,
  },
};

export default class Drawery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nickname: '',
      lon: 0,
      lat: 0,
      country: 'Vietnam',
      stability: 5,
      aesthetics: 5,
      safety: 5,
      reviews: {
        date_visited: Date(Date.UTC(96, 1, 2, 3, 4, 5)),
        content: '',
        user_id: 0,
      }
    };
  }

  handleFirstSlider = (event, value) => {
    this.setState({stability: value});
  };

  handleSecondSlider = (event, value) => {
    this.setState({aesthetics: value});
  };

  handleThirdSlider = (event, value) => {
    this.setState({safety: value});
  };

  handleClick(event) {
    this.setState({
      clicktext: 'Submit button clicked'
    });
  };

  handleChange(event) {
    console.log(event.target.name)
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch(addLocation(this.state));
  }

  render() {
    return (
      <div>

        <Drawer
          docked={false}
          width={window.innerWidth*0.5}
          open={this.props.open}
          openSecondary={true}
          onRequestChange={this.props.onRequestChange}
          containerClassName="drawer"
        >

            <h2>Add New Anchorage</h2>

            <p>{this.state.clicktext}</p>

            <form onSubmit={(event) => this.handleSubmit(event)}>

              <TextField
                name="nickname"
                hintText="Nickname"
                floatingLabelText="Nickname"
                multiLine={false}
                fullWidth={false}
                onChange={(event) => this.handleChange(event)}
              />

              <br />

              <TextField
                name="latitude"
                hintText="Latitude"
                floatingLabelText="Latitude"
                multiLine={false}
                fullWidth={false}
                onChange={(event) => this.handleChange(event)}
              />

              <TextField
                name="longitude"
                hintText="Longitude"
                floatingLabelText="Longitude"
                multiLine={false}
                fullWidth={false}
                style={{paddingLeft: '20px'}}
                onChange={(event) => this.handleChange(event)}
              />

              <TextField
                name="country"
                hintText="Country"
                floatingLabelText="Country"
                multiLine={false}
                fullWidth={false}
                style={{paddingLeft: '-20px'}}
                onChange={(event) => this.handleChange(event)}
              />

              <FlatButton label="Use current location" primary={true} style={styles.button} />

              <br />
              <br />
              <br />

              <div className="sliders row" style={styles.root}>

                <div className="sliderContainer" name="stability">
                <div>{'Stability: '}{this.state.stability}</div>
                <Slider
                  value={this.state.stability}
                  onChange={this.handleFirstSlider}
                  style={{height: 100}}
                  sliderStyle={{left:'40%'}}
                  axis="y"
                  defaultValue={5}
                  min={0}
                  max={10}
                  step={0.1}/>
                </div>

                <div className="sliderContainer" name="aesthetics">
                <div>{'Aesthetics: '}{this.state.aesthetics}</div>
                <Slider
                  name="aesthetics"
                  value={this.state.aesthetics}
                  onChange={this.handleSecondSlider}
                  style={{height: 100}}
                  sliderStyle={{left:'40%'}}
                  axis="y"
                  defaultValue={5}
                  min={0}
                  max={10}
                  step={0.1}/>
                </div>

                <div className="sliderContainer" name="safety">
                <div>{'Safety: '}{this.state.safety}</div>
                <Slider
                  name="safety"
                  value={this.state.safety}
                  onChange={this.handleThirdSlider}
                  style={{height: 100}}
                  sliderStyle={{left:'40%'}}
                  axis="y"
                  defaultValue={5}
                  min={0}
                  max={10}
                  step={0.1}/>
                </div>

              </div>

              <br />
              <br />
              <Subheader className="subheader">Amenities</Subheader>

              <div className="row" style={styles.checkboxblock}>

                <div className="column">

                  <Checkbox
                    label="Fuel"
                    style={styles.checkbox}
                  />
                  <Checkbox
                    label="Fresh Water"
                    style={styles.checkbox}
                  />
                  <Checkbox
                    label="Food"
                    style={styles.checkbox}
                  />

                </div>
                <div className="column">

                  <Checkbox
                    label="Laundry"
                    style={styles.checkbox}
                  />
                  <Checkbox
                    label="Snorkeling"
                    style={styles.checkbox}
                  />
                  <Checkbox
                    label="Diving"
                    style={styles.checkbox}
                  />

                </div>
                <div className="column">

                  <Checkbox
                    label="Surfing"
                    style={styles.checkbox}
                  />
                  <Checkbox
                    label="Windsurfing"
                    style={styles.checkbox}
                  />
                  <Checkbox
                    label="Paddleboarding"
                    style={styles.checkbox}
                  />

                </div>

              </div>

              <TextField
                name="content"
                hintText="Write a Review"
                floatingLabelText="Write a Review"
                multiLine={true}
                fullWidth={true}
                rows={2}
                onChange={(event) => this.handleChange(event)}
              />

              <RaisedButton
                className="submitBtn"
                label="Submit"
                type="submit"
                secondary={true}
                fullWidth={false}
                style={styles.button}
                onClick={(event) => this.handleClick(event)}
              />

            </form>

        </Drawer>

      </div>
    );
  }
}

/*
function mapStateToProps(state) {
  return { locations: state.locations }
}

function mapDispatchToProps(dispatch) {
    addLocation: (location) => { dispatch(addLocation(location)) }
}

export const ConnectedDrawer = connect(mapStateToProps, mapDispatchToProps)(Drawery)
*/

function mapStateToProps(state) {
  return { locations: state.locations }
}

function mapDispatchToProps(dispatch) {
  addLocation: (location) => { dispatch(addLocation(location)) }
}

connect(mapStateToProps)(Drawery)
