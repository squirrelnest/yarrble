import React, { Component } from 'react';
// import subheader from 'material-ui/subheader';
import paradise from '../img/paradise.jpg';
import styles from '../css/showLocation.module.css';
import NoteAdd from 'material-ui/svg-icons/action/note-add';
import NewReviewForm from '../components/NewReviewForm';
import ReviewCards from '../components/ReviewCards';
import WindCompass from '../components/WindCompass';
import { connect } from 'react-redux';
import {
  createReview,
  postOfflineReviews
} from '../actions/reviewActions';

class ShowLocation extends Component {

  constructor(props){
    super(props);
    this.state = {
      openReview: false,
      openLocation: false
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
      openReview: true,
    })
  }

  openLocationForm = () => {
    console.log('open sesame')
    this.setState({
      openLocation: true,
    })
  }

  handleSubmit = (reviewData) => {
    this.props.createReview({...reviewData, location_id: this.props.loc.id})
    this.handleClose();
    let url = `/locations/${this.props.loc.id}`;
    this.props.history.push(url)
  }

  handleClose = () => {
    this.setState({
      openReview: false
    })
    let url = `/locations/${this.props.loc.id}`;
    this.props.history.push(url);
  }

  render() {

    const { loc, admin } = this.props

    return (
      <div className='column'>

        <section className='row'>
          <section className={styles.imageContainer}>
            <div className={styles.image} style={{ backgroundImage: `url(${paradise})` }} alt="tropical island"/>
          </section>
          <section className={styles.locationDataContainer}>
                  
            <div className={styles.locationHeader}>
              <div><h1>{loc.nickname}, {loc.country}</h1></div>
              { admin && 
                <div onClick={this.openLocationForm} className={styles.addReview}>        
                  <div className={styles.addReview}>
                    <NoteAdd hoverColor={'coral'} />
                    <div className={styles.hideOnMobile}>Edit Location</div>
                  </div>
                </div>
              } 
            </div>

            <div className={styles.coordinates}>
                <div className={styles.data}>
                  <span className={styles.label}>Latitude</span>
                  <div className={styles.field}><h2>{loc.lat}</h2></div>
                </div>
                <div className={styles.data}>
                  <span className={styles.label}>Longitude</span>
                  <div className={styles.field}><h2>{loc.lon}</h2></div>
                </div>
              </div>
            <div className={styles.table}>           
              <div className={styles.data}>
                <span className={styles.label}>Depth</span>
                <div className={styles.field}><h2>{loc.depth && `${loc.depth}m`}</h2></div>
              </div>
              <div className={styles.data}>
                <span className={styles.label}>Bottom</span>
                <div className={styles.field}><h2>sand</h2></div>
              </div>
              <div className={styles.data}>
                <span className={styles.label}>Wind Protection</span>
                <div className={styles.field}>{loc.winds && <WindCompass winds={loc.winds}/>}</div>
              </div>
              <div className={styles.data}>
                <span className={styles.label}>Amenities</span>
                <div className={styles.field}>
                  {loc.amenities && loc.amenities.map(am => <p key={am.name} className={styles.field}>{am.name}</p>)}
                </div>
              </div>
            </div>
          </section>       
        </section>

        <section className={styles.reviewsContainer}>
          <div className={styles.reviewsHeader}>
            <div className={styles.label}>Reviews</div>
            <div onClick={this.openReviewForm} className={styles.addReview}>
              <div className={styles.addReview}>
                <NoteAdd hoverColor={'coral'} />
                <div className={styles.hideOnMobile}>Add Review</div>
              </div>
            </div>
          </div>
          { loc.reviews && <ReviewCards reviews={loc.reviews} /> }
          <NewReviewForm open={this.state.openReview} handleSubmit={this.handleSubmit} handleClose={this.handleClose}/>
        </section>

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let location_id = Number(ownProps.match.params.locationId)
  return {
    locations: state.locations.locations || [],
    loc: state.locations.locations.filter(location => { return location.id === location_id })[0] || [],
    admin: state.auth.admin || false  
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    createReview: (formData) => dispatch(createReview(formData)),
    postOfflineReviews: () => dispatch(postOfflineReviews())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowLocation);
