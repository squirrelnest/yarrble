import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { connect } from 'react-redux';

function alphabetize(current, next) {
  if (current.nickname > next.nickname) {
    return 1;
  } else if (current.nickname < next.nickname) {
    return -1;
  } else {
    return 0;
  }
}

export default class Listy extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const locations = this.props.locations.sort(alphabetize).map( (loc) =>
      <ListItem
        key={loc.id}
        primaryText={loc.nickname}
        initiallyOpen={false}
        primaryTogglesNestedList={true}
  /*      nestedItems={loc.reviews.map( (review) =>
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
          {locations}
        </List>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { locations: state.locations };
};
