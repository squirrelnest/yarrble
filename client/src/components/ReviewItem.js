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

export default class ReviewItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fixedHeader: true,
      fixedFooter: false,
      stripedRows: false,
      showRowHover: true,
      selectable: true,
      multiSelectable: true,
      enableSelectAll: true,
      deselectOnClickaway: true,
      showCheckboxes: false,
      height: 'window.innerHeight*0.75',
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
    console.log(review_id)
    this.setState({ visibility: 'visible' });
  }

  handleMouseOut = () => {
    this.setState({ visibility: 'hidden' })
  }

  handleClick = (event, review_id) => {
    event.preventDefault();
    console.log(review_id)
    alert("Are you sure you want to delete this?");
/*    this.props.store.dispatch(deleteReview(review_id));  */
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
