import React, { Component } from 'react';
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import LocationListItem from '../components/LocationListItem';
import { fetchNearbyLocations, fetchLocations } from '../actions/thunks';
import FlatButton from 'material-ui/FlatButton';
import {Tabs, Tab} from 'material-ui/Tabs';

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

  handleActive = (tab) => {
    if (tab.props['name'] === 'nearby') {
      this.props.store.dispatch(fetchNearbyLocations());
    } else {
      this.props.store.dispatch(fetchLocations());
    }
  }

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

          <Tabs inkBarStyle={{background: "#00BCD4"}}>
            <Tab href="" label="All Anchorages" onActive={this.handleActive} name="all" style={{ color: '#212121', backgroundColor: 'none' }}/>
            <Tab href="" label="Nearby Anchorages" onActive={this.handleActive} name="nearby"  style={{ color: '#212121', backgroundColor: 'none' }}/>
          </Tabs>

          {locations}

        </List>

      </div>
    );
  }
}
