import React, { Component } from 'react';
import { List } from 'material-ui/List';
import LocationItem from '../components/LocationItem';
import { fetchNearbyLocations, fetchLocations } from '../actions/thunks';
import {Tabs, Tab} from 'material-ui/Tabs';
import NewReviewForm from '../components/NewReviewForm';
import { createReview } from '../actions/reviewActions';
import { withRouter } from "react-router-dom";

function alphabetize(current, next) {
  if (current.nickname > next.nickname) {
    return 1;
  } else if (current.nickname < next.nickname) {
    return -1;
  } else {
    return 0;
  }
}

export class LocationList extends Component {

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
    this.props.store.dispatch(createReview({...reviewData, location_id: this.state.review_location}))
    this.handleClose();
    let url = `/locations/${this.state.review_location}`;
/*    <Redirect to={url}/>; */
    console.log(url)
    this.props.history.push(url)
  }

  render() {

    const locations = this.props.locations.sort(alphabetize).map( (loc, index) =>

      <LocationItem
        location_id={loc.id}
        handleClick={this.props.handleClick}
        key={index}
        name={loc.nickname}
        country={loc.country}
        moveMap={this.props.moveMap}
        lon={loc.lon}
        lat={loc.lat}
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
          handleSubmit={this.handleSubmit}
        />

        <Tabs inkBarStyle={{background: '#00BCD4'}}>
          <Tab href="" label="All Anchorages" onActive={this.handleActive} name="all" className="tab-active one" style={{ color: '#212121', backgroundColor: 'none' }}/>
          <Tab href="" label="Nearby Anchorages" onActive={this.handleActive} name="nearby" className="tab-inactive one" style={{ color: '#212121', backgroundColor: 'none' }}/>
        </Tabs>

        <List style={{ height: '90%', overflow: 'auto'}}>

          {locations}

        </List>

      </div>
    );
  }
}

export default withRouter(LocationList);
