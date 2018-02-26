import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { connect } from 'react-redux';

export default class Listy extends Component {

  state = {
    open: false,
    locations: []
  };

  componentDidMount() {
    console.log(this.props.locations)
  }

  render() {

    const locations = this.props.locations.map( (loc) =>
      <ListItem
        key={loc.id}
        primaryText={loc.nickname}
        initiallyOpen={false}
        primaryTogglesNestedList={true}
        nestedItems={loc.reviews.map( (review) =>
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
