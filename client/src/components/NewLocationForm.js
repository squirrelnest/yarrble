import React, { Component } from 'react';
import Drawer from '@mui/material/Drawer';
import TextField from '@mui/material/TextField';
import { Slider } from '@mui/material';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { ListSubheader } from '@mui/material';
import WindSelector from './WindSelector';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { API_ROOT } from '../api-config';
import classes from '../css/NewLocationForm.module.css';

export function isMobile() {
  return window.innerWidth < 700
}

const styles = {
  form: {
    width: '100%',
    paddingTop: '20px'
  },
  checkboxblock: {
    margin: '20px 0 0'
  },
  checkbox: {
    marginBottom: 16,
  },
  textField: {
    marginRight: '20px',
    marginBottom: '20px'
  }
};

const initialState = {
  nickname: '',
  depth: '',
  longitude: '',
  latitude: '',
  country: '',
  stability: 5,
  aesthetics: 5,
  safety: 5,
  date_visited: Date(Date.UTC(96, 1, 2, 3, 4, 5)),
  content: '',
  fuel: false,
  water: false,
  grocery: false,
  laundry: false,
  diving: false,
  snorkeling: false,
  paddleboarding: false,
  surfing: false,
  amenities: [],
  windProtection: []
}

export default class NewLocationForm extends Component {

  constructor(props) {
    super(props);
    this.state = initialState
  }

  handleCheck(event) {
    let key = event.target.name
    this.setState((oldState) => {
      let old = oldState[key]
      return {
        [key]: !old,
      };
    });
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

  handleAmenitiesClick = (event) => {
    event.preventDefault()
    this.handleCheck(event)
    this.setState({
      amenities: ( event.target.id !== "" && this.state.amenities.includes(event.target.id) ) ? 
        this.state.amenities.filter(amenity => amenity !== event.target.id) 
        : 
        this.state.amenities.concat(event.target.id)
    });
  };

  handleWindClick = (event) => {
    event.preventDefault()
    this.setState({
      windProtection: ( event.target.id !== "" && this.state.windProtection.includes(event.target.id) ) ? 
        this.state.windProtection.filter(direction => direction !== event.target.id) 
        : 
        this.state.windProtection.concat(event.target.id)
    });
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleDateChange(date) {
    let newDate = new Date(date).toDateString()
    this.setState({
      date_visited: newDate,
    });
  };

  getPosition(event) {
    event.preventDefault();
    this.setState({
      longitude: localStorage.getItem('lon'),
      latitude: localStorage.getItem('lat'),
    })
    fetch(`//${API_ROOT}/locations/get_country/${localStorage.getItem('lon')}/${localStorage.getItem('lat')}`, {
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

  componentWillReceiveProps(nextProps) {
    if (this.props.open === false) {
      this.setState(initialState);
    }
  }

  render() {
    return (
      <div>

        <Drawer
          docked={false}
          width={window.innerWidth > 700 ? window.innerWidth*0.5 : window.innerWidth}
          open={this.props.open}
          openSecondary={true}
          onRequestChange={(event) => this.props.handleRequestChange()}
          containerClassName="drawer"
        >

            <div
              className={classes.mobileOnly}
              onClick={this.props.handleClose}>
              <div>&#10005;</div>
            </div>

            <h2>Add New Anchorage</h2>

            <form
              style={styles.form}
              onSubmit={ (event) => {
                event.preventDefault();
                this.props.handleSubmit(this.state);
              }
            }>

              <TextField
                name="nickname"
                label="Nickname"
                value={this.state.nickname}
                multiline={false}
                fullWidth={isMobile()}
                style={styles.textField}
                onChange={(event) => this.handleChange(event)}
              />

              <TextField
                name="depth"
                label="Depth (meters)"
                value={this.state.depth}
                multiline={false}
                fullWidth={isMobile()}
                style={styles.textField}
                onChange={(event) => this.handleChange(event)}
              />

              <Button
                variant="outlined"
                color="secondary"
                className={classes.button}
                style={{marginBottom: '20px'}}
                disabled={!this.props.isOnline}
                onClick={(event) => this.getPosition(event)}
              >
              Autofill location
              </Button>

              <br />

              <TextField
                name="latitude"
                label="Latitude"
                value={this.state.latitude}
                multiline={false}
                fullWidth={isMobile()}
                style={styles.textField}
                onChange={(event) => this.handleChange(event)}
              />

              <TextField
                name="longitude"
                label="Longitude"
                value={this.state.longitude}
                multiline={false}
                fullWidth={isMobile()}
                style={styles.textField}
                onChange={(event) => this.handleChange(event)}
              />

              <TextField
                name="country"
                label="Country"
                value={this.state.country}
                multiline={false}
                fullWidth={isMobile()}
                style={styles.textField}
                onChange={(event) => this.handleChange(event)}
              />

              <div className="row">

                <div className={classes.formRow}>
                  <ListSubheader className="subheader">Wind Protection</ListSubheader>
                  <WindSelector clickHandler={this.handleWindClick} />
                </div>
                <div className={classes.formRow}>
                  <ListSubheader className="subheader">Ratings</ListSubheader>
                  <div className="sliders">

                    <div className="sliderContainer" name="stability">
                      <div>{'Comfort: '}{this.state.stability}</div>
                      <Slider
                        value={this.state.stability}
                        onChange={this.handleFirstSlider}
                        style={{width: 100, paddingTop: '20px'}}
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
                        style={{width: 100, paddingTop: '20px'}}
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
                        style={{width: 100, paddingTop: '20px'}}
                        defaultValue={5}
                        min={0}
                        max={10}
                        step={1}/>
                    </div>
                  </div>
                </div>
              </div>
            
              <ListSubheader className="subheader">Amenities</ListSubheader>

              <div className="grid" style={styles.checkboxblock}>

                <Checkbox
                  label="Fuel"
                  style={styles.checkbox}
                  name="fuel"
                  id="fuel"
                  checked={this.state.fuel}
                  onCheck={(event) => this.handleAmenitiesClick(event)}
                />
                <Checkbox
                  label="Fresh Water"
                  style={styles.checkbox}
                  name="water"
                  id="water"
                  checked={this.state.water}
                  onCheck={(event) => this.handleAmenitiesClick(event)}
                />
                <Checkbox
                  label="Grocery"
                  style={styles.checkbox}
                  name="grocery"
                  id="grocery"
                  checked={this.state.grocery}
                  onCheck={(event) => this.handleAmenitiesClick(event)}
                />

                <Checkbox
                  label="Laundry"
                  style={styles.checkbox}
                  name="laundry"
                  id="laundry"
                  checked={this.state.laundry}
                  onCheck={(event) => this.handleAmenitiesClick(event)}
                />
                <Checkbox
                  label="Snorkeling"
                  style={styles.checkbox}
                  name="snorkeling"
                  id="snorkeling"
                  checked={this.state.snorkeling}
                  onCheck={(event) => this.handleAmenitiesClick(event)}
                />
                <Checkbox
                  label="Diving"
                  style={styles.checkbox}
                  name="diving"
                  id="diving"
                  checked={this.state.diving}
                  onCheck={(event) => this.handleAmenitiesClick(event)}
                />

                <Checkbox
                  label="Surfing"
                  style={styles.checkbox}
                  name="surfing"
                  id="surfing"
                  checked={this.state.surfing}
                  onCheck={(event) => this.handleAmenitiesClick(event)}
                />
                <Checkbox
                  label="Windsurfing"
                  style={styles.checkbox}
                  name="windsurfing"
                  id="windsurfing"
                  checked={this.state.windsurfing}
                  onCheck={(event) => this.handleAmenitiesClick(event)}
                />
                <Checkbox
                  label="Paddleboarding"
                  style={styles.checkbox}
                  name="paddleboarding"
                  id="paddleboarding"
                  checked={this.state.paddleboarding}
                  onCheck={(event) => this.handleAmenitiesClick(event)}
                />

              </div>

              <TextField
                name="content"
                label="Write a Review"
                value={this.state.content}
                multiline={true}
                fullWidth={true}
                rows={3}
                style={{marginBottom: '20px'}}
                onChange={(event) => this.handleChange(event)}
              />

              <div className={classes.lastLine}>
                <div>
                  <DatePicker
                    margin="normal"
                    label="Date Visited"
                    value={this.state.date_visited}
                    onChange={(date) => this.handleDateChange(date)}
                    format='MMM dd yyyy'
                  />
                </div>
                <div className={classes.buttonsContainer}>
                  <Button variant="contained"
                    label="Submit"
                    type="submit"
                    secondary={true}
                    fullWidth={isMobile()}
                    className={[classes.button, classes.submitBtn].join(' ')}
                    onClick={this.props.handleToggle}
                  />
                  <Button variant="text"
                    className={[classes.closeButton, classes.desktopOnly].join(' ')}
                    onClick={this.props.handleClose}
                  >
                    CANCEL
                  </Button>
                </div>
              </div>

            </form>

        </Drawer>

      </div>
    );
  }
}
