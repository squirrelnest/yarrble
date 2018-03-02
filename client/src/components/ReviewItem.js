import React, {Component} from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import DeleteBtn from './DeleteBtn';
import EditBtn from './EditBtn';
import { connect } from 'react-redux';
import { deleteReview } from '../actions/reviewActions';
import { EditReviewForm } from '../components/EditReviewForm';
import { ShowReview } from '../components/ShowReview';

export class ReviewItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visibility: 'hidden',
      editing: false,
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

  handleDelete = (event) => {
    event.preventDefault();
    this.props.store.dispatch(deleteReview(this.props.review_id));
  }

  handleEdit = (event) => {
    event.preventDefault();
    console.log(this.state.editing)
    this.setState({ editing: true });
  }

  render() {

    let row = null;
    if ( this.state.editing === true ) {
      row = <EditReviewForm
        handleMouseOver={this.handleMouseOver}
        handleMouseOut={this.handleMouseOut}
        review_id={this.props.review_id}
        nickname={this.props.nickname}
        content={this.props.content}
        stability={this.props.stability}
        aesthetics={this.props.aesthetics}
        safety={this.props.safety}
        visibility={this.state.visibility}
        handleEdit={this.handleEdit}
        handleDelete={this.handleDelete}
      />
    } else {
      row = <ShowReview
        handleMouseOver={this.handleMouseOver}
        handleMouseOut={this.handleMouseOut}
        review_id={this.props.review_id}
        nickname={this.props.nickname}
        content={this.props.content}
        stability={this.props.stability}
        aesthetics={this.props.aesthetics}
        safety={this.props.safety}
        visibility={this.state.visibility}
        handleEdit={this.handleEdit}
        handleDelete={this.handleDelete}
      />
    }

    return row;

  }
}
