import React, { Component } from 'react';
import Subheader from 'material-ui/Subheader';
import paradise from '../img/paradise.jpg';
import styles from '../css/showLocation.module.css';
import NoteAdd from 'material-ui/svg-icons/action/note-add';
import NewReviewForm from '../components/NewReviewForm';
import ReviewCards from '../components/ReviewCards';
import { connect } from 'react-redux';
import {
  createReview,
  postOfflineReviews
} from '../actions/reviewActions';

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
  };

  isOffline = () => {
    alert(
      'You are currently offline. Your drafts will be saved and uploaded when back online.'
    );
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
                    
    const winds = loc.winds && Object.entries(loc.winds[0]).map(
      (keyval) => { 
        let key = keyval[0]
        let val = keyval[1]
        if (val === true) {
          return (<p key={key}>{key}</p>)
        } else {
          return null;
        }      
      }          
    )
    

    return (

        <div className="row">
          <div className={styles.imageContainer}><img src={tilesData[0].img} className={styles.image} alt="tropical island"/></div>
          <div className={styles.locationDataContainer}>
            <h1>{loc.nickname}, {loc.country}</h1>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th><Subheader className={styles.subheader}>Latitude</Subheader></th>
                    <th><Subheader className={styles.subheader}>Longitude</Subheader></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={styles.tableCell}><h2>{loc.lat}</h2></td>
                    <td className={styles.tableCell}><h2>{loc.lon}</h2></td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th><Subheader className={styles.subheader}>Depth</Subheader></th>
                    <th><Subheader className={styles.subheader}>Bottom</Subheader></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={styles.tableCell}><h2>{loc.depth}</h2></td>
                    <td className={styles.tableCell}><h2>Sand</h2></td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th><Subheader className={styles.subheader}>Wind Protection</Subheader></th>
                    <th><Subheader className={styles.subheader}>Amenities</Subheader></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <td className={styles.tableCell}>
                    {winds}
                  </td>
                    <td className={styles.tableCell}><p>{loc.amenities ? loc.amenities.map(am => <p>{am.name}</p>) : JSON.stringify(loc.amenities)}</p></td>
                  </tr>
                </tbody>
              </table>
            <Subheader className={styles.subheader} style={{ padding: '20px' }}>
              <div>Reviews</div>
              <div onClick={this.openReviewForm} className={styles.addReview}>
                <div className={styles.addReview}>
                  <NoteAdd hoverColor={'f44336'} />
                  <div className={styles.hideOnMobile}>Add Review...</div>
                </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(ShowLocation);
