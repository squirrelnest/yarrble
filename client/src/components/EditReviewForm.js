import React, {Component} from 'react';
import { TableRow, TableCell } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
          <TableCell>{this.props.review_id}</TableCell>
          <TableCell><p style={{ width: '80px', overflow: 'hidden', textOverflow: 'ellipsis'}}>{this.props.nickname}</p></TableCell>
          <TableCell><TextField name="content" onChange={(event) => this.handleChange(event)} value={this.state.content} floatingLabelText='content' multiLine={true} textareaStyle={{ marginBottom: '0px' }} /></TableCell>
          <TableCell><TextField name="stability" onChange={(event) => this.handleChange(event)} value={this.state.stability} floatingLabelText='stability' multiLine={true} textareaStyle={{ marginBottom: '0px' }}/></TableCell>
          <TableCell><TextField name="aesthetics" onChange={(event) => this.handleChange(event)} value={this.state.aesthetics} floatingLabelText='aesthetics' multiLine={true} textareaStyle={{ marginBottom: '0px' }}/></TableCell>
          <TableCell><TextField name="safety" onChange={(event) => this.handleChange(event)} value={this.state.safety} floatingLabelText='safety' multiLine={true} textareaStyle={{ marginBottom: '0px' }}/></TableCell>
          <TableCell>
            <Button variant="contained"
              className="submitBtn"
              label="Submit"
              type="submit"
              secondary={true}
              fullWidth={false}
              style={styles.button}
              onClick={(event) => this.props.handleSubmit(event, this.state)}
            />
            <Button variant="text"
              className="cancelBtn"
              label="Cancel"
              type="cancel"
              secondary={true}
              fullWidth={false}
              style={styles.button}
              onClick={(event) => this.props.handleCancel(event)}
            />
          </TableCell>
        </TableRow>

    );
  }
}
