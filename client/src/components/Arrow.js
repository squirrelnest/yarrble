import React, { Component } from 'react';
import classes from '../css/WindSelector.module.css';

export default class Arrow extends Component {

  constructor(props) {
    super(props);
    this.state={
      selected: false
    }
  }

  handleClick = (event) => {
    event.preventDefault()
    this.props.clickHandler(event)
    this.setState({
      selected: !this.state.selected
    })
  }

  render() {
    const { id, children, css } = this.props
    return (
      <div id={id} onClick={(event) => this.handleClick(event)} className={[css, this.state.selected ? classes.selected : '' ].join(' ')}>{children}</div>
    )
  }
}
