import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import Subheader from 'material-ui/Subheader';

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

export default class NewLocationForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nickname: '',
      longitude: '',
      latitude: '',
      country: '',
      stability: 5,
      aesthetics: 5,
      safety: 5,
      date_visited: Date(Date.UTC(96, 1, 2, 3, 4, 5)),
      content: '',
      user_id: 0
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
      open: false,
    });
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  getPosition(event) {
    event.preventDefault();
    this.setState({
      longitude: localStorage.getItem('lon'),
      latitude: localStorage.getItem('lat'),
    })
    fetch(`http://localhost:3001/locations/get_country/${localStorage.getItem('lon')}/${localStorage.getItem('lat')}`, {
      method: "GET",
      credentials: 'omit',  /* other options: include, same-origin */
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(response => {
      if (response.features[0] == null) {
        this.setState({ country: '' })
      } else {
        this.setState({ country: response.features[0].place_name })
      }
    })
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

            <form onSubmit={ (event) => {
                event.preventDefault();
                this.props.handleSubmit(this.state);
              }
            }
            >

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
                value={this.state.latitude}
                multiLine={false}
                fullWidth={false}
                onChange={(event) => this.handleChange(event)}
              />

              <TextField
                name="longitude"
                hintText="Longitude"
                floatingLabelText="Longitude"
                value={this.state.longitude}
                multiLine={false}
                fullWidth={false}
                style={{paddingLeft: '20px'}}
                onChange={(event) => this.handleChange(event)}
              />

              <TextField
                name="country"
                hintText="Country"
                floatingLabelText="Country"
                value={this.state.country}
                multiLine={false}
                fullWidth={false}
                style={{paddingLeft: '-20px'}}
                onChange={(event) => this.handleChange(event)}
              />

              <FlatButton
                label="Use current location"
                primary={true}
                style={styles.button}
                onClick={(event) => this.getPosition(event)}
              />

              <br />
              <br />
              <br />

              <div className="sliders row" style={styles.root}>

                <div className="sliderContainer" name="stability">
                <div>{'Comfort: '}{this.state.stability}</div>
                <Slider
                  value={this.state.stability}
                  onChange={this.handleFirstSlider}
                  style={{height: 100}}
                  sliderStyle={{left:'40%'}}
                  axis="y"
                  defaultValue={5}
                  min={0}
                  max={10}
                  step={1}/>
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
                  step={1}/>
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
                  step={1}/>
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
                onClick={this.props.handleToggle}
              />

            </form>

        </Drawer>

      </div>
    );
  }
}
