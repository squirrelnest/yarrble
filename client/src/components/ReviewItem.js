import React, {Component} from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import DeleteBtn from './DeleteBtn';
import EditBtn from './EditBtn';
import { connect } from 'react-redux';

export class ReviewItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visibility: 'hidden',
    };
  }

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.nickname]: toggled,
    });
  };

  handleMouseOver = (event, name) => {
    this.setState({ visibility: 'visible' });
  }

  handleMouseOut = () => {
    this.setState({ visibility: 'hidden' })
  }

  render() {

    return (

      <TableRow
        hoverable={true}
        key={this.props.key}
        hover={true}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
      >
        <TableRowColumn>{this.props.review_id}</TableRowColumn>
        <TableRowColumn>{this.props.nickname}</TableRowColumn>
        <TableRowColumn>{this.props.content}</TableRowColumn>
        <TableRowColumn>{this.props.stability}</TableRowColumn>
        <TableRowColumn>{this.props.aesthetics}</TableRowColumn>
        <TableRowColumn>{this.props.safety}</TableRowColumn>
        <TableRowColumn><DeleteBtn review_id={this.props.review_id} store={this.props.store} visibility={this.state.visibility} /></TableRowColumn>
        <TableRowColumn><EditBtn review_id={this.props.review_id} store={this.props.store} visibility={this.state.visibility} /></TableRowColumn>
      </TableRow>

    );
  }
}
