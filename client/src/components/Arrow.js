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
    if (this.props.interactive) {
      this.props.clickHandler(event)
      this.setState({
        selected: !this.state.selected
      })
    }
  }

  render() {
    const { id, children, css, interactive } = this.props
    return (
      <div id={id} onClick={(event) => this.handleClick(event)} className={[css, interactive && classes.interactive, this.state.selected && classes.selected].join(' ')}>{children}</div>
    )
  }
}
