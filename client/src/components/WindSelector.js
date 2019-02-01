import React, { Component } from 'react';
import classes from '../css/WindSelector.module.css';
import Arrow from './Arrow';

export function isMobile() {
  return window.innerWidth < 700
}

export default class WindSelector extends Component {

  constructor(props) {
    super(props);
    this.state={
    }
  }

  // handleClick =(event) => {
  //   this.props.clickHandler(event)
  //   this.setState({
  //     [event.target.id]: true
  //   })
  //   console.log(this.state.NW)
  // }

  render() {
    return (
      <div className={classes.dial}>
        <div className="row">
          <div className={classes.arrowContainer}>
            <Arrow id="NW" clickHandler={this.props.clickHandler} css={classes.arrowNorthwest} />
          </div>
          <div className={classes.arrowContainer}>
            <Arrow id="N" clickHandler={this.props.clickHandler} css={classes.arrowNorth}> 
              <div className={classes.arrowText}>N</div> 
            </Arrow> 
          </div>
          <div className={classes.arrowContainer}>
            <Arrow id="NE" clickHandler={this.props.clickHandler} css={classes.arrowNortheast} />
          </div>
        </div>
        <div className="row">
          <div className={classes.arrowContainer}><Arrow id="W" clickHandler={this.props.clickHandler} css={classes.arrowWest} /></div>
          <div className={classes.arrowContainer}><Arrow className={classes.arrowBlank} /></div>
          <div className={classes.arrowContainer}><Arrow id="E" clickHandler={this.props.clickHandler} css={classes.arrowEast} /></div>
        </div>
        <div className="row">
          <div className={classes.arrowContainer}><Arrow id="SW" clickHandler={this.props.clickHandler} css={classes.arrowSouthwest} /></div>
          <div className={classes.arrowContainer}><Arrow id="S" clickHandler={this.props.clickHandler} css={classes.arrowSouth} /></div>
          <div className={classes.arrowContainer}><Arrow id="SE" clickHandler={this.props.clickHandler} css={classes.arrowSoutheast} /></div>
        </div> 
      </div>
    )
  }
}
