import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import DeleteBtn from './DeleteBtn';
import { deleteReview } from '../actions/reviewActions';
import { connect } from 'react-redux';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

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

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };

  handleMouseOver = (event, review_id) => {
    this.setState({ visibility: 'visible' });
  }

  handleMouseOut = () => {
    this.setState({ visibility: 'hidden' })
  }

  handleClick = (event, review_id) => {
    event.preventDefault();
    console.log(review_id);
    deleteReview(review_id);
  }

  render() {

    return (

      <TableRow
        key={this.props.key}
        onMouseOver={ (event) => this.handleMouseOver(event, this.props.review_id) }
        onMouseOut={this.handleMouseOut}
      >
        <TableRowColumn>{this.props.review_id}</TableRowColumn>
        <TableRowColumn>{this.props.nickname}</TableRowColumn>
        <TableRowColumn>{this.props.content}</TableRowColumn>
        <TableRowColumn>{this.props.stability}</TableRowColumn>
        <TableRowColumn>{this.props.aesthetics}</TableRowColumn>
        <TableRowColumn>{this.props.safety}</TableRowColumn>
        <TableRowColumn><DeleteBtn handleClick={ (event) => this.handleClick(event, this.props.review_id) } visibility={this.state.visibility } /></TableRowColumn>
      </TableRow>

    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
           deleteReview: (review_id) => dispatch(deleteReview(review_id))
         }
}

export default connect(null, mapDispatchToProps)(ReviewItem)
