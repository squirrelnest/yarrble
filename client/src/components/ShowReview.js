import React, {Component} from 'react';
import { TableRow, TableCell } from '@mui/material';
import DeleteBtn from './DeleteBtn';
import EditBtn from './EditBtn';

export class ShowReview extends Component {

  render() {

    return (

        <TableRow
          hoverable={true}
          key={this.props.key}
          onMouseOver={this.props.handleMouseOver}
          onMouseOut={this.props.handleMouseOut}
        >

          <TableCell>{this.props.review_id}</TableCell>
          <TableCell>{this.props.nickname}</TableCell>
          <TableCell>{this.props.content}</TableCell>
          <TableCell>{this.props.stability}</TableCell>
          <TableCell>{this.props.aesthetics}</TableCell>
          <TableCell>{this.props.safety}</TableCell>

          <TableCell>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <DeleteBtn
                review_id={this.props.review_id}
                handleClick={this.props.handleDelete}
                visibility={this.props.visibility}
              />
              <EditBtn
                review_id={this.props.review_id}
                handleClick={this.props.handleEdit}
                visibility={this.props.visibility}
              />
            </div>
          </TableCell>

        </TableRow>

    );
  }
}
