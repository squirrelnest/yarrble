import React, { Component } from 'react';
import Subheader from 'material-ui/Subheader';
import paradise from '../img/paradise.jpg';
import { connect } from 'react-redux';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import {blue300, indigo900} from 'material-ui/styles/colors';
import { NavLink } from 'react-router-dom';
import NoteAdd from 'material-ui/svg-icons/action/note-add';
import { createReview } from '../actions/reviewActions';
import NewReviewForm from '../components/NewReviewForm';
import { ReviewCards } from '../components/ReviewCards';

const styles = {
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
  imageContainer: {
    width:'50%',
    margin:0,
    display:'column',
  },
  locationDataContainer: {
    width:'50%',
    margin:'0px 20px',
    display:'column',
    height: window.innerHeight*0.92,
    overflow: 'auto',
  },
  image: {
    height:window.innerHeight*0.92,
    width:window.innerWidth*0.5
  },
  subheader: {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  table: {
    width:'100%',
    textAlign:'left',
    marginBottom:'20px',
    marginLeft: '-4px',
  },
  tableCell: {
    color: '#00BCD4',
    paddingLeft: '16px',
  }
};

const tilesData = [
  {
    img: paradise,
    title: 'Ao Yon Beach',
  },
]

class ShowLocation extends Component {

  constructor(props){
    super(props);
    this.state = {
      open: false,
    }
  }

  openReviewForm = () => {
    this.setState({
      open: true,
    })
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = (reviewData) => {
    this.props.createReview({...reviewData, location_id: this.props.location.id})
    this.handleClose();
    let url = `/locations/${this.props.location.id}`;
    this.props.history.push(url)
  }

  handleClose = () => {
    this.setState({
      open: false
    })
    let url = `/locations/${this.props.location.id}`;
    this.props.history.push(url);
  }

  render() {

    const SingleLocation = (location) =>
      <div className="show-location row" style={{ margin: 0, }}>
        <div style={styles.imageContainer}><img src={tilesData[0].img} style={styles.image}/></div>
        <div style={styles.locationDataContainer}>
          <h1>{location.nickname}, {location.country}</h1>
            <table style={styles.table}>
              <th><Subheader>Latitude</Subheader></th>
              <th><Subheader>Longitude</Subheader></th>
                <tr>
                  <td style={styles.tableCell}><h2>{location.lat}</h2></td>
                  <td style={styles.tableCell}><h2>{location.lon}</h2></td>
                </tr>
              <th><Subheader>Depth</Subheader></th>
              <th><Subheader>Bottom</Subheader></th>
                <tr>
                  <td style={styles.tableCell}><h2>5.1m</h2></td>
                  <td style={styles.tableCell}><h2>Sand</h2></td>
                </tr>
            </table>
          <Subheader style={styles.subheader}>
            <div>Reviews</div>
            <div>
              <span onClick={this.openReviewForm} handleClose={this.handleClose}>
                <NoteAdd hoverColor={'f44336'} style={{ margin: '-6px 10px' }}/>
                Add Review...
              </span>
            </div>
          </Subheader>

          {ReviewCards(this.props.location)}

        </div>

        <NewReviewForm open={this.state.open} handleSubmit={this.handleSubmit} handleClose={this.handleClose}/>

      </div>

    return (

      <div>
        {SingleLocation(this.props.location)}
      </div>
    )
  }
}
/* map Redux store state to props */

const mapStateToProps = (state, ownProps) => {
  const location = state.locations.locations.find(location => location.id == ownProps.match.params.locationId)

  if (location) {
    return { location }
  } else {
    return { location: { reviews: [] } }
  }
}

const mapDispatchToProps = (dispatch) => {

  return { createReview: (formData) => dispatch(createReview(formData)) }

}

/* connect() creates a higher-order component out of the ShowLocation component, a function that is then called by <Link> in parent */

export default connect(mapStateToProps, mapDispatchToProps)(ShowLocation);