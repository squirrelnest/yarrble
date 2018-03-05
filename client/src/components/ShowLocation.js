import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import similan from '../img/similan.jpg';
import placeholder from '../img/placeholder.png';
import paradise from '../img/paradise.jpg';
import antigua from '../img/antigua.jpg';
import { connect } from 'react-redux';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import {blue300, indigo900} from 'material-ui/styles/colors';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    height: '200px'
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
  chip: {
    margin: 4,
  },
};

const tilesData = [
  {
    img: paradise,
    title: 'Ao Yon Beach',
  },
  {
    img: similan,
    title: 'Similan Islands',
  },
  {
    img: similan,
    title: 'Similan Islands',
  },
  {
    img: antigua,
    title: 'Antigua',
  },
  {
    img: placeholder,
    title: 'Ao Yon Beach',
  },
  {
    img: placeholder,
    title: 'Ao Yon Beach',
  },
]

const locationPics =
<div style={styles.root}>
 <GridList
  style={styles.gridList}
  cols={2.2}
  padding={0}
>
   {tilesData.map((tile) => (
     <GridTile
       key={tile.img}
     >
       <img src={tile.img} />
     </GridTile>
   ))}
 </GridList>
</div>

/* You don't need a return() if you don't use curly braces inside an arrow function */

const reviews = ({ location }) => location.reviews.map((review) =>
  <div>
    <Card>
      <CardText>
        <p>"{review.content}"</p>
        <div className="row">
          <Chip
            backgroundColor={blue300}
            style={styles.chip}
          >
            <Avatar size={32} color={blue300} backgroundColor={indigo900}>
              {review.stability}
            </Avatar>
            Comfort
          </Chip>
          <Chip
            backgroundColor={blue300}
            style={styles.chip}
          >
            <Avatar size={32} color={blue300} backgroundColor={indigo900}>
              {review.aesthetics}
            </Avatar>
            Aesthetics
          </Chip>
          <Chip
            backgroundColor={blue300}
            style={styles.chip}
          >
            <Avatar size={32} color={blue300} backgroundColor={indigo900}>
              {review.safety}
            </Avatar>
            Safety
          </Chip>
        </div>
      </CardText>
    </Card>
  </div>
);

const ShowLocation = ({ location }) =>
  <div className="show-location">
    {locationPics}
    <h1>{location.nickname}, {location.country}</h1>
    <h2 style={{ color: '#00BCD4' }}>Latitude: {location.lat}</h2>
    <h2 style={{ color: '#00BCD4' }}>Longitude: {location.lon}</h2>
    <h2 style={{ color: '#00BCD4' }}>Depth: 5m</h2>
    <h2 style={{ color: '#00BCD4' }}>Bottom: Sand</h2>
    <Subheader>Reviews</Subheader>
    {reviews({location})}
  </div>

const mapStateToProps = (state, ownProps) => {
  const location = state.locations.locations.find(location => location.id == ownProps.match.params.locationId)

  if (location) {
    return { location }
  } else {
    return { location: { reviews: [] } }
  }
}

/* connect() creates a higher-order component out of the ShowLocation component, whose function is then called by the <Link> */

export default connect(mapStateToProps)(ShowLocation);
