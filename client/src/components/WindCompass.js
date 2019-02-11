import React, { Component } from 'react';
import classes from '../css/WindSelector.module.css';
import Arrow from './Arrow';

export default class WindCompass extends Component {

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
            <Arrow id="NW" css={[classes.arrowNorthwest, this.props.winds[0] && this.props.winds[0].NW && classes.selected].join(' ')} />
          </div>
          <div className={classes.arrowContainer}>
            <Arrow id="N" css={[classes.arrowNorth, this.props.winds[0] && this.props.winds[0].N && classes.selected].join(' ')}> 
              <div className={classes.arrowText}>N</div> 
            </Arrow> 
          </div>
          <div className={classes.arrowContainer}>
            <Arrow id="NE" css={[classes.arrowNortheast, this.props.winds[0] && this.props.winds[0].NE && classes.selected].join(' ')} />
          </div>
        </div>
        <div className="row">
          <div className={classes.arrowContainer}>
            <Arrow id="W" css={[classes.arrowWest, this.props.winds[0] && this.props.winds[0].W && classes.selected].join(' ')} />
          </div>
          <div className={classes.arrowContainer}>
            <Arrow className={classes.arrowBlank} />
          </div>
          <div className={classes.arrowContainer}>
            <Arrow id="E" css={[classes.arrowEast, this.props.winds[0] && this.props.winds[0].E && classes.selected].join(' ')} />
          </div>
        </div>
        <div className="row">
          <div className={classes.arrowContainer}>
            <Arrow id="SW" css={[classes.arrowSouthwest, this.props.winds[0] && this.props.winds[0].SW && classes.selected].join(' ')} />
          </div>
          <div className={classes.arrowContainer}>
            <Arrow id="S" css={[classes.arrowSouth, this.props.winds[0] && this.props.winds[0].S && classes.selected].join(' ')} />
          </div>
          <div className={classes.arrowContainer}>
            <Arrow id="SE" css={[classes.arrowSoutheast, this.props.winds[0] && this.props.winds[0].SE && classes.selected].join(' ')} />
          </div>
        </div> 
      </div>
    )
  }
}
