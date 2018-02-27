import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { fetchReviews } from '../actions/reviewActions';

export default class Nearby extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.store.dispatch(fetchReviews())
  }

  render() {

    const reviews = this.props.reviews.map( (review) =>
      <ListItem
        key={review.id}
        primaryText={review.id}
        initiallyOpen={false}
        primaryTogglesNestedList={true}
/*        nestedItems={loc.reviews.map( (review) =>
          <ListItem
            key={review.id}
            primaryText={review.content}
           />
        )}
*/
      />
    )

    return (
      <div className="listy">

        <List>
          <Subheader>Anchorages</Subheader>
          {reviews}
        </List>

      </div>
    );
  }
}
