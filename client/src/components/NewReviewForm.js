import React, { Component } from 'react';
import classes from '../css/NewReviewForm.module.css';
import { Dialog, DialogContent, DialogContentText, Button, Slider, Typography } from '@mui/material';
import 'date-fns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const styles = {
  root: {
    display: 'flex',
    height: '100%',
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
  }
};

const initialState = {
  stability: 5,
  aesthetics: 5,
  safety: 5,
  date_visited: Date(Date.UTC(96, 1, 2, 3, 4, 5)),
  content: '',
  user_id: 0
};

export default class NewReviewForm extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
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

  handleDateChange = (date) => {
    let newDate = new Date(date).toDateString()
    this.setState({
      date_visited: newDate,
    });
  };

  submitAndReset = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState(initialState);
  }

  render() {
    return (
      <Dialog
        style={{ classes }}
        modal={true}
        autoScrollBodyContent={true}
        open={this.props.open}
      >
        <DialogContent>
          <DialogContentText>Add a review</DialogContentText>

          <form onSubmit={(event) => this.submitAndReset(event)}>

            <div style={styles.root}>

              <div className="sliderContainer" name="stability">
              <h5>{'Stability: '}{this.state.stability}</h5>
              <Slider
                name="stability"
                value={this.state.stability}
                onChange={this.handleFirstSlider}
                sliderStyle={{left:'0%', width: '150px'}}
                axis="x"
                defaultValue={5}
                min={0}
                max={10}
                step={1}/>
              </div>

              <div className="sliderContainer" name="aesthetics">
              <h5>{'Aesthetics: '}{this.state.aesthetics}</h5>
              <Slider
                name="aesthetics"
                value={this.state.aesthetics}
                onChange={this.handleSecondSlider}
                sliderStyle={{left:'0%', width: '150px'}}
                axis="x"
                defaultValue={5}
                min={0}
                max={10}
                step={1}/>
              </div>

              <div className="sliderContainer" name="safety">
              <h5>{'Safety: '}{this.state.safety}</h5>
              <Slider
                name="safety"
                value={this.state.safety}
                onChange={this.handleThirdSlider}
                sliderStyle={{left:'0%', width: '150px'}}
                axis="x"
                defaultValue={5}
                min={0}
                max={10}
                step={1}/>
              </div>

            </div>

              <div className={styles.data}>
              <span className={styles.label}>Write a review</span>
              <div className={styles.field}>
                <textarea
                  style={{ width: '100%' }}
                  rows='10'
                  name='content'
                  value={this.state.content}
                  onChange={(event) => this.handleChange(event)}/>
              </div>
            </div>

            <div>
              <DatePicker
                margin="normal"
                label="Date Visited"
                value={this.state.date_visited}
                onChange={(event, date) => this.handleDateChange(event, date)}
                slotProps={{ textField: { 
                    helperText: 'MM/DD/YYYY'
                  } 
                }}
              />
            </div>
            <Button 
              variant="text"
              primary={true}
              onClick={this.props.handleClose}
            >
              <Typography>Cancel</Typography>
            </Button>
            <Button 
              variant="text"
              primary={true}
              type="submit"
              name="submit"
              onClick={this.submitAndReset}
            >
              <Typography>Submit</Typography>
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    );
  }
}
