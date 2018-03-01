import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import Subheader from 'material-ui/Subheader';

const styles = {
  root: {
    display: 'flex',
    height: 200,
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

export default class NewReviewForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
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

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.props.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onClick={this.props.handleClose}
      />,
    ];

    return (
      <div>

        <Dialog
          title="Add Review to this Location"
          actions={actions}
          style={{ zIndex: 3000 }}
          modal={true}
          open={this.props.open}
        >

          <div style={styles.root}>

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

          <TextField
            name="content"
            hintText="Write a Review"
            floatingLabelText="Write a Review"
            multiLine={true}
            fullWidth={true}
            rows={2}
            onChange={(event) => this.handleChange(event)}
          />

        </Dialog>

      </div>
    );
  }
}
