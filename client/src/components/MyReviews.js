import React, {Component} from 'react';
import { fetchReviews } from '../actions/reviewActions';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import { ReviewItem } from './ReviewItem';

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

export default class MyReviews extends Component {

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
      height: 'window.innerHeight*0.75'
    };
  }

  componentDidMount() {
    this.props.store.dispatch(fetchReviews())
  }

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.nickname]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };

  handleClick = (event, review_id) => {
    event.preventDefault();
    console.log(review_id)
    alert("Are you sure you want to delete this?");
/*    this.props.store.dispatch(deleteReview(review_id));  */
  }

  render() {

    const tableData = this.props.reviews.map( (review) =>
      <ReviewItem
        key={review.id}
        review_id={review.id}
        nickname={review.location.nickname}
        content={review.content}
        stability={review.stability}
        aesthetics={review.aesthetics}
        safety={review.safety}
      />
    )

    return (
      <div>
        <Table
          styles={styles}
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="7" tooltip="My Reviews" style={{textAlign: 'center'}}>
                My Reviews
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="id">id</TableHeaderColumn>
              <TableHeaderColumn tooltip="location">location</TableHeaderColumn>
              <TableHeaderColumn tooltip="content">content</TableHeaderColumn>
              <TableHeaderColumn tooltip="stability">stability</TableHeaderColumn>
              <TableHeaderColumn tooltip="aesthetics">aesthetics</TableHeaderColumn>
              <TableHeaderColumn tooltip="safety">safety</TableHeaderColumn>
              <TableHeaderColumn tooltip="tasks"></TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >

          {tableData}

          </TableBody>
        </Table>

      </div>
    );
  }
}
