import React, { Component } from 'react';
import styles from '../css/UpdateLocationForm.module.css';
import classes from '../css/NewLocationForm.module.css';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import WindSelector from './WindSelector';
import { API_ROOT } from '../api-config';

export function isMobile() {
  return window.innerWidth < 700
}

const initialState = {
  nickname: '',
  depth: '',
  longitude: '',
  latitude: '',
  country: '',
  stability: '',
  date_modified: Date(Date.UTC(96, 1, 2, 3, 4, 5)),
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
    console.log(this.state.longitude)
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.open === false) {
      this.setState(initialState);
    }
  }

  render() {

    const { loc } = this.props

    return (
      <div>

        <form
          style={styles.form}
          onSubmit={ (event) => {
            event.preventDefault();
            this.props.handleSubmit(this.state);
          }
        }>

          <div className={styles.locationHeader}>
            <div><h1>{loc.nickname}, {loc.country}</h1></div>
            <div onClick={this.props.toggleForm} className={styles.addReview}>                     
              <div
                className={styles.closeBtn}
                onClick={this.props.handleClose}>
                &#10005;
              </div>  
            </div>
          </div>

          <div className={styles.coordinates}>
            <div className={styles.data}>
              <span className={styles.label}>Latitude</span>
              <div className={styles.field}>
                <input
                  type='text'
                  name='latitude'
                  defaultValue={loc.lat}
                  onChange={(event) => this.handleChange(event)}/>
              </div>
            </div>
            <div className={styles.data}>
              <span className={styles.label}>Longitude</span>
              <div className={styles.field}>
                <input
                  type='text'
                  name='longitude'
                  defaultValue={loc.lon}
                  onChange={(event) => this.handleChange(event)}/>
              </div>
            </div>
          </div>

          <div className={styles.table}>           
            <div className={styles.data}>
              <span className={styles.label}>Depth</span>
              <div className={styles.field}>
              <input
                    type='text'
                    name='depth'
                    defaultValue={loc.depth}
                    onChange={(event) => this.handleChange(event)}/>
              </div>
            </div>
            <div className={styles.data}>
              <span className={styles.label}>Bottom</span>
              <div className={styles.field}>
              <input
                    type='text'
                    name='bottom'
                    defaultValue={loc.bottom}
                    onChange={(event) => this.handleChange(event)}/>
              </div>
            </div>
            <div className={styles.data}>
              <span className={styles.label}>Wind Protection</span>
              <div className={styles.field}>
                <WindSelector clickHandler={this.handleWindClick}/>
              </div>
            </div>         
          </div>
        
          <span className={styles.label}>Amenities</span>

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
      
          <div className={classes.buttonsContainer}>
            <RaisedButton
              label="Submit"
              type="submit"
              secondary={true}
              fullWidth={isMobile()}
              className={[classes.button, classes.submitBtn].join(' ')}
              onClick={this.props.handleToggle}
            />
            <FlatButton
              className={[classes.closeButton, classes.desktopOnly].join(' ')}
              onClick={this.props.handleClose}
            >
              CANCEL
            </FlatButton>
          </div>

        </form>
      </div>
    );
  }
}
