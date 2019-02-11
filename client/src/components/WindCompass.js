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
            <Arrow id="NW" interactive={false} css={[classes.arrowNorthwest, this.props.winds[0].NW ? classes.selected : null].join(' ')} />
          </div>
          <div className={classes.arrowContainer}>
            <Arrow id="N" interactive={false} css={[classes.arrowNorth, this.props.winds[0].N ? classes.selected : null].join(' ')}> 
              <div className={classes.arrowText}>N</div> 
            </Arrow> 
          </div>
          <div className={classes.arrowContainer}>
            <Arrow id="NE" interactive={false} css={[classes.arrowNortheast, this.props.winds[0].NE ? classes.selected : null].join(' ')} />
          </div>
        </div>
        <div className="row">
          <div className={classes.arrowContainer}>
            <Arrow id="W" interactive={false} css={[classes.arrowWest, this.props.winds[0].W ? classes.selected : null].join(' ')} />
          </div>
          <div className={classes.arrowContainer}>
            <Arrow className={classes.arrowBlank} />
          </div>
          <div className={classes.arrowContainer}>
            <Arrow id="E" interactive={false} css={[classes.arrowEast, this.props.winds[0].E ? classes.selected : null].join(' ')} />
          </div>
        </div>
        <div className="row">
          <div className={classes.arrowContainer}>
            <Arrow id="SW" interactive={false} css={[classes.arrowSouthwest, this.props.winds[0].SW ? classes.selected : null].join(' ')} />
          </div>
          <div className={classes.arrowContainer}>
            <Arrow id="S" interactive={false} css={[classes.arrowSouth, this.props.winds[0].S ? classes.selected : null].join(' ')} />
          </div>
          <div className={classes.arrowContainer}>
            <Arrow id="SE" interactive={false} css={[classes.arrowSoutheast, this.props.winds[0].SE ? classes.selected : null].join(' ')} />
          </div>
        </div> 
      </div>
    )
  }
}
