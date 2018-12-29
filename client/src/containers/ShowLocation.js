import React, { Component } from 'react';
import Subheader from 'material-ui/Subheader';
import paradise from '../img/paradise.jpg';
import NoteAdd from 'material-ui/svg-icons/action/note-add';
import NewReviewForm from '../components/NewReviewForm';
import ReviewCards from '../components/ReviewCards';
import { connect } from 'react-redux';
import {
  createReview,
  postOfflineReviews
} from '../actions/reviewActions';

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

  componentDidMount() {
    if (window.navigator.onLine) {
      this.isOnline();
    }
    window.addEventListener('online', () => {
      this.isOnline();
    });
    window.addEventListener('offline', () => {
      this.isOffline();
    });
  }

  componentWillUnmount() {
    window.removeEventListener('online', () => {
      this.isOnline();
    });
    window.removeEventListener('offline', () => {
      this.isOffline();
    });
  }

  isOnline = () => {
    this.props.postOfflineReviews()
    localStorage.removeItem('draft_reviews');
    localStorage.removeItem('cachedReviews');
    console.log('online');
  };

  isOffline = () => {
    alert(
      'You are currently offline. Your drafts will be saved and uploaded when back online.'
    );
    console.log('offline');
    localStorage.setItem(
      'cachedReviews',
      JSON.stringify(this.props.locations)
    );
  };

  openReviewForm = () => {
    this.setState({
      open: true,
    })
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = (reviewData) => {
    this.props.createReview({...reviewData, location_id: this.props.loc.id})
    this.handleClose();
    let url = `/locations/${this.props.loc.id}`;
    this.props.history.push(url)
  }

  handleClose = () => {
    this.setState({
      open: false
    })
    let url = `/locations/${this.props.loc.id}`;
    this.props.history.push(url);
  }

  render() {

    const { loc } = this.props

    return (

        <div className="show-location row" style={{ margin: 0, }}>
          <div style={styles.imageContainer}><img src={tilesData[0].img} style={styles.image} alt="tropical island"/></div>
          <div style={styles.locationDataContainer}>
            <h1>{loc.nickname}, {loc.country}</h1>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th><Subheader>Latitude</Subheader></th>
                    <th><Subheader>Longitude</Subheader></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={styles.tableCell}><h2>{loc.lat}</h2></td>
                    <td style={styles.tableCell}><h2>{loc.lon}</h2></td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th><Subheader>Depth</Subheader></th>
                    <th><Subheader>Bottom</Subheader></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={styles.tableCell}><h2>5.1m</h2></td>
                    <td style={styles.tableCell}><h2>Sand</h2></td>
                  </tr>
                </tbody>
              </table>
            <Subheader style={styles.subheader}>
              <div>Reviews</div>
              <div>
                <span onClick={this.openReviewForm}>
                  <NoteAdd hoverColor={'f44336'} style={{ margin: '-6px 10px' }}/>
                  Add Review...
                </span>
              </div>
            </Subheader>

            { loc.reviews && <ReviewCards reviews={loc.reviews} /> }

          </div>

          <NewReviewForm open={this.state.open} handleSubmit={this.handleSubmit} handleClose={this.handleClose}/>

        </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let location_id = Number(ownProps.match.params.locationId)
  return {
    locations: state.locations.locations || [],
    loc: state.locations.locations.filter(location => { return location.id === location_id })[0] || []
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    createReview: (formData) => dispatch(createReview(formData)),
    postOfflineReviews: () => dispatch(postOfflineReviews())
  }
}

/* connect() creates a higher-order component out of the ShowLocation component, a function that is then called by <Link> in parent */

export default connect(mapStateToProps, mapDispatchToProps)(ShowLocation);
