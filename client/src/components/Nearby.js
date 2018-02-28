import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { fetchNearbyLocations } from '../actions/thunks';

export default class Nearby extends Component {

  componentDidMount() {
    this.props.store.dispatch(fetchNearbyLocations());
  }

  render() {

    const locations = this.props.locations.map( (location) =>
      <ListItem
        key={location.id}
        primaryText={location.nickname}
        initiallyOpen={false}
        primaryTogglesNestedList={true}
        nestedItems={location.reviews.map( (review) =>
          <ListItem
            key={review.id}
            primaryText={review.content}
           />
        )}

      />
    )

    return (
      <div className="listy">

        <List>
          <Subheader>Anchorages within 10km</Subheader>
          {locations}
        </List>

      </div>
    );
  }
}
