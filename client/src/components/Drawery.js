import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import AutoComplete from 'material-ui/AutoComplete';
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

const countries = ['United States of America', 'Vietnam', 'Philippines', 'Russia']

export default class Drawery extends Component {

  state = {
    clicktext: '',
    nickname: '',
    stability: 5,
    aesthetics: 5,
    safety: 5,
  };

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
    this.setState({
      nickname: event.target.value
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({type: 'ADD_LOCATION', location: this.state})
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
            <p>{this.state.nickname}</p>
            <form onSubmit={(event) => this.handleSubmit(event)}>

              <TextField
                hintText="Nickname"
                floatingLabelText="Nickname"
                multiLine={false}
                fullWidth={false}
                onChange={(event) => this.handleChange(event)}
              />

              <br />

              <TextField
                hintText="Latitude"
                floatingLabelText="Latitude"
                multiLine={false}
                fullWidth={false}
              />

              <TextField
                hintText="Longitude"
                floatingLabelText="Longitude"
                multiLine={false}
                fullWidth={false}
                style={{paddingLeft: '20px'}}
              />

              <AutoComplete
                floatingLabelText="Country"
                filter={AutoComplete.caseInsensitiveFilter}
                dataSource={countries}
              />

              <FlatButton label="Use current location" primary={true} style={styles.button} />

              <br />
              <br />
              <br />

              <div className="sliders row" style={styles.root}>

                <div className="sliderContainer">
                <div>{'Stability: '}{this.state.firstSlider}</div>
                <Slider
                  value={this.state.stability}
                  onChange={this.handleFirstSlider}
                  style={{height: 100}}
                  sliderStyle={{left:'40%'}}
                  axis="y"
                  defaultValue={5}
                  min={0}
                  max={10}/>
                </div>

                <div className="sliderContainer">
                <div>{'Aesthetics: '}{this.state.secondSlider}</div>
                <Slider
                  value={this.state.aesthetics}
                  onChange={this.handleSecondSlider}
                  style={{height: 100}}
                  sliderStyle={{left:'40%'}}
                  axis="y"
                  defaultValue={5}
                  min={0}
                  max={10}/>
                </div>

                <div className="sliderContainer">
                <div>{'Safety: '}{this.state.thirdSlider}</div>
                <Slider
                  value={this.state.safety}
                  onChange={this.handleThirdSlider}
                  style={{height: 100}}
                  sliderStyle={{left:'40%'}}
                  axis="y"
                  defaultValue={5}
                  min={0}
                  max={10}/>
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
                hintText="Write a Review"
                floatingLabelText="Write a Review"
                multiLine={true}
                fullWidth={true}
                rows={2}
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
