import React, { Component } from 'react';
import classes from '../css/WindSelector.module.css';
import Arrow from './Arrow';

export default class WindSelector extends Component {

  constructor(props) {
    super(props);
    this.state={
    }
  }

  render() {
    return (
      <div className={classes.dial}>
        <div className="row">
          <div className={classes.arrowContainer}>
            <Arrow id="NW" interactive clickHandler={this.props.clickHandler} css={classes.arrowNorthwest} />
          </div>
          <div className={classes.arrowContainer}>
            <Arrow id="N" interactive clickHandler={this.props.clickHandler} css={classes.arrowNorth}> 
              <div className={classes.arrowText}>N</div> 
            </Arrow> 
          </div>
          <div className={classes.arrowContainer}>
            <Arrow id="NE" interactive clickHandler={this.props.clickHandler} css={classes.arrowNortheast} />
          </div>
        </div>
        <div className="row">
          <div className={classes.arrowContainer}>
            <Arrow id="W" interactive clickHandler={this.props.clickHandler} css={classes.arrowWest} />
          </div>
          <div className={classes.arrowContainer}>
            <Arrow className={classes.arrowBlank} />
          </div>
          <div className={classes.arrowContainer}>
            <Arrow id="E" interactive clickHandler={this.props.clickHandler} css={classes.arrowEast} />
          </div>
        </div>
        <div className="row">
          <div className={classes.arrowContainer}>
            <Arrow id="SW" interactive clickHandler={this.props.clickHandler} css={classes.arrowSouthwest} />
          </div>
          <div className={classes.arrowContainer}>
            <Arrow id="S" interactive clickHandler={this.props.clickHandler} css={classes.arrowSouth} />
          </div>
          <div className={classes.arrowContainer}>
            <Arrow id="SE" interactive clickHandler={this.props.clickHandler} css={classes.arrowSoutheast} />
          </div>
        </div> 
      </div>
    )
  }
}
