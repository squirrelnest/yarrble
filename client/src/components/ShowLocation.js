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

const reviews = ({ location }) => location.reviews.map((review, key) =>
  Object.keys(review).map(( item ) => <p>{review.content}</p> ))

const ShowLocation = ({ location }) =>
  <div className="show-location">
    {locationPics}
    <h1>{location.nickname}, {location.country}</h1>
    <h2 style={{ color: '#00BCD4' }}>Latitude: {location.lat}</h2>
    <h2 style={{ color: '#00BCD4' }}>Longitude: {location.lon}</h2>
    <Subheader>Reviews</Subheader>
    <p>{JSON.stringify(location.reviews)}</p>
    {reviews}
  </div>

const mapStateToProps = (state, ownProps) => {
  const location = state.locations.locations.find(location => location.id == ownProps.match.params.locationId)

  if (location) {
    return { location }
  } else {
    return { location: {} }
  }
}

export default connect(mapStateToProps)(ShowLocation);
