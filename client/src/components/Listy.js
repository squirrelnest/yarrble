import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

export default class Listy extends Component {

  state = {
    open: false,
  };

  componentDidMount() {
    console.log(this.props.locations)
  }

  render() {

    const locations = this.props.locations.map( (loc) =>
      <ListItem
        key={loc.id}
        primaryText={loc.nickname}
        initiallyOpen={true}
        primaryTogglesNestedList={true}
        nestedItems={loc.reviews.map( (review) =>
          <ListItem
            key={1}
            primaryText={review.content}
           />
        )}
      />
    )

    return (
      <div className="listy">

        <List>
          <Subheader>Anchorages</Subheader>
          {locations}
        </List>

      </div>
    );
  }
}
