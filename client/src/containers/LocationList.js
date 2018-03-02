import React, { Component } from 'react';
import { List } from 'material-ui/List';
import LocationItem from '../components/LocationItem';
import { fetchNearbyLocations, fetchLocations } from '../actions/thunks';
import {Tabs, Tab} from 'material-ui/Tabs';
import NewReviewForm from '../components/NewReviewForm';

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
    this.state = {
      NewReviewFormOpen: false,
      review_location: null,
    }
  }

  handleRequestClose = () => {
    this.setState({
      popoverOpen: false,
    });
  };

  handleActive = (tab) => {
    if (tab.props['name'] === 'nearby') {
      this.props.store.dispatch(fetchNearbyLocations());
    } else {
      this.props.store.dispatch(fetchLocations());
    }
  }

  handleAdd = (location_id) => {
  console.log(location_id)
  /*  event.preventDefault(); */
    this.setState({
      NewReviewFormOpen: true,
      popoverOpen: false,
      review_location: location_id,
    });
  }

  handleOpen = () => {
    this.setState({NewReviewFormOpen: true});
  };

  handleClose = () => {
    this.setState({NewReviewFormOpen: false});
  };

  handleSubmit = (reviewData) => {
    console.log(this.state.review_location);
    dispatch(addReview(reviewData, this.state.review_location))
    this.handleClose();
  }

  render() {

    const locations = this.props.locations.sort(alphabetize).map( (loc, index) =>

      <LocationItem
        location_id={loc.id}
        handleClick={this.props.handleClick}
        key={index}
        name={loc.nickname}
        primaryText={loc.nickname}
        initiallyOpen={false}
        primaryTogglesNestedList={true}
        store={this.props.store}
        handleAdd={this.handleAdd}
        nestedItems={loc.reviews}
        handleRequestClose={this.handleRequestClose}
        openPopover={this.openPopover}
      />

    )

    return (
      <div className="listy">

        <NewReviewForm
          open={this.state.NewReviewFormOpen}
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
          review_location={this.state.review_location}
          handleSubmit={this.handleSubmit}
        />

        <List>

          <Tabs inkBarStyle={{background: '#00BCD4'}}>
            <Tab href="" label="All Anchorages" onActive={this.handleActive} name="all" className="tab-active one" style={{ color: '#212121', backgroundColor: 'none' }}/>
            <Tab href="" label="Nearby Anchorages" onActive={this.handleActive} name="nearby" className="tab-inactive one" style={{ color: '#212121', backgroundColor: 'none' }}/>
          </Tabs>

          {locations}

        </List>

      </div>
    );
  }
}
