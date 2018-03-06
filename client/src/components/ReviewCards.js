import React, { Component } from 'react';
import paradise from '../img/paradise.jpg';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import ReviewCard from '../components/ReviewCard';

const styles = {
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
  chip: {
    margin: '0px 4px 18px',
  },
  subheader: {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};

const tilesData = [
  {
    img: paradise,
    title: 'Ao Yon Beach',
  },
]

/* FUNCTIONAL STATELESS COMPONENT */

/* You don't need a return() function if you don't use curly braces inside an arrow function */

function latest_updated(current, next) {
  if (current.updated_at > next.updated_at) {
    return -1;
  } else if (current.updated_at < next.updated_at) {
    return 1;
  } else {
    return 0;
  }
}

export default class ReviewCards extends Component {

  constructor(props) {
    super(props);
    this.state = {
      like: 0,
    }
  }

  handleClick() {
    this.setState({
      like: this.state.like + 1
    })
  }

  render() {

    const ReviewCards = this.props.location.reviews.sort(latest_updated).map((review) =>
        <div>
          <ReviewCard
            review={review}
            like={this.state.like}
          />
        </div>

      )

      return (
        <div>
          {ReviewCards}
        </div>
      );

  }
}
