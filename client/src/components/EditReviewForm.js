import React, {Component} from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import DeleteBtn from './DeleteBtn';
import EditBtn from './EditBtn';
import { connect } from 'react-redux';

export class EditReviewForm extends Component {

  render() {

    return (

      <div>
        <TableRow
          hoverable={true}
          key={this.props.key}
          hover={true}
          onMouseOver={this.props.handleMouseOver}
          onMouseOut={this.props.handleMouseOut}
        >
          <TableRowColumn>{this.props.review_id}</TableRowColumn>
          <TableRowColumn><TextField value={this.props.review_id} /></TableRowColumn>
          <TableRowColumn><TextField value={this.props.nickname} /></TableRowColumn>
          <TableRowColumn><TextField value={this.props.content} /></TableRowColumn>
          <TableRowColumn><TextField value={this.props.stability} /></TableRowColumn>
          <TableRowColumn><TextField value={this.props.aesthetics} /></TableRowColumn>
          <TableRowColumn><TextField value={this.props.safety} /></TableRowColumn>
          <TableRowColumn><DeleteBtn review_id={this.props.review_id} onClick={this.props.handleDelete} visibility={this.props.visibility} /></TableRowColumn>
          <TableRowColumn><EditBtn review_id={this.props.review_id} onClick={this.props.handleEdit} visibility={this.props.visibility} /></TableRowColumn>
        </TableRow>
      </div>

    );
  }
}
