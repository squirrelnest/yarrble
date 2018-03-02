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

  constructor(props) {
    super(props);
    this.state = {
      content: this.props.content,
      stability: this.props.stability,
      aesthetics: this.props.aesthetics,
      safety: this.props.safety,
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {

    return (

        <TableRow
          hoverable={true}
          key={this.props.key}
          hover={true}
          onMouseOver={this.props.handleMouseOver}
          onMouseOut={this.props.handleMouseOut}
        >
          <TableRowColumn>{this.props.review_id}</TableRowColumn>
          <TableRowColumn><p style={{ width: '80px', overflow: 'hidden', textOverflow: 'ellipsis'}}>{this.props.nickname}</p></TableRowColumn>
          <TableRowColumn><TextField name="content" style={{ width: '680px' }} onChange={(event) => this.handleChange(event)} value={this.state.content} floatingLabelText='content' multiLine={true} textareaStyle={{ marginBottom: '0px' }} /></TableRowColumn>
          <TableRowColumn><TextField name="stability" style={{ width: '80px' }} onChange={(event) => this.handleChange(event)} value={this.state.stability} floatingLabelText='stability' multiLine={true} textareaStyle={{ marginBottom: '0px' }}/></TableRowColumn>
          <TableRowColumn><TextField name="aesthetics" style={{ width: '80px' }} onChange={(event) => this.handleChange(event)} value={this.state.aesthetics} floatingLabelText='aesthetics' multiLine={true} textareaStyle={{ marginBottom: '0px' }}/></TableRowColumn>
          <TableRowColumn><TextField name="safety" style={{ width: '80px' }} onChange={(event) => this.handleChange(event)} value={this.state.safety} floatingLabelText='safety' multiLine={true} textareaStyle={{ marginBottom: '0px' }}/></TableRowColumn>
          <TableRowColumn>
            <RaisedButton
              className="submitBtn"
              label="Submit"
              type="submit"
              secondary={true}
              fullWidth={false}
              style={styles.button}
              onClick={(event) => this.props.handleSubmit(event, this.state)}
            />
          </TableRowColumn>
        </TableRow>

    );
  }
}
