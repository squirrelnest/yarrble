import React, { Component } from 'react';
import { List, ListItem, ListItemIcon } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import DeleteBtn from './DeleteBtn';
import { connect } from 'react-redux';
import Delete from 'material-ui/svg-icons/action/delete';
import LocationListItem from './LocationListItem'

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

  constructor(props) {
    super(props);
  }

  render() {

    const locations = this.props.locations.sort(alphabetize).map( (loc) =>

        <LocationListItem
          key={loc.id}
          name={loc.nickname}
          primaryText={loc.nickname}
          initiallyOpen={false}
          primaryTogglesNestedList={true}
            nestedItems={loc.reviews.map( (review) =>
              <ListItem
                insetChildren={true}
                key={review.id}
                primaryText= { '"' + review.content + '"' }
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
