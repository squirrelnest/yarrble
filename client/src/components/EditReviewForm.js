import React, {Component} from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import DeleteBtn from './DeleteBtn';
import EditBtn from './EditBtn';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

const styles={
  width: '100%',
}

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
          <TableRowColumn><p style={{ width: '80px', overflow: 'hidden', textOverflow: 'ellipsis'}}>{this.props.nickname}</p></TableRowColumn>
          <TableRowColumn><TextField style={{ width: '680px' }} value={this.props.content} floatingLabelText='content' multiLine={true} textareaStyle={{ marginBottom: '0px' }} /></TableRowColumn>
          <TableRowColumn><TextField style={{ width: '80px' }} value={this.props.stability} floatingLabelText='stability' multiLine={true} textareaStyle={{ marginBottom: '0px' }}/></TableRowColumn>
          <TableRowColumn><TextField style={{ width: '80px' }} value={this.props.aesthetics} floatingLabelText='aesthetics' multiLine={true} textareaStyle={{ marginBottom: '0px' }}/></TableRowColumn>
          <TableRowColumn><TextField style={{ width: '80px' }} value={this.props.safety} floatingLabelText='safety' multiLine={true} textareaStyle={{ marginBottom: '0px' }}/></TableRowColumn>
          <TableRowColumn>
            <RaisedButton
              className="submitBtn"
              label="Submit"
              type="submit"
              secondary={true}
              fullWidth={false}
              style={styles.button}
              onClick={this.props.handleSubmit}
            />
          </TableRowColumn>
        </TableRow>
      </div>

    );
  }
}
