import React, { Component } from 'react';
import { List, ListItem } from '@mui/material/List';
import Subheader from '@mui/material/Subheader';
import { fetchNearbyLocations } from '../actions/locationActions';
import { connect } from 'react-redux';

export class Nearby extends Component {

  componentDidMount() {
    this.props.fetchNearbyLocations()
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

const mapDispatchToProps = (dispatch) => {
  return { fetchNearbyLocations: () => dispatch(fetchNearbyLocations()) }
};

export default connect(null, mapDispatchToProps)(Nearby);
