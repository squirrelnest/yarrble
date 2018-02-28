import React, { Component } from 'react';
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import LocationListItem from '../components/LocationListItem'

function alphabetize(current, next) {
  if (current.nickname > next.nickname) {
    return 1;
  } else if (current.nickname < next.nickname) {
    return -1;
  } else {
    return 0;
  }
}

export default class LocationList extends Component {

  render() {

    const locations = this.props.locations.sort(alphabetize).map( (loc, index) =>

        <LocationListItem
          location_id={loc.id}
          handleClick={this.props.handleClick}
          key={index}
          name={loc.nickname}
          primaryText={loc.nickname}
          initiallyOpen={false}
          primaryTogglesNestedList={true}
          nestedItems={loc.reviews}
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
