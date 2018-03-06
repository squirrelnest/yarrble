import { combineReducers } from 'redux';
<<<<<<< HEAD
import locationReducer from './locationReducer';
import reviewReducer from './reviewReducer';

const yomama = combineReducers({
  locations: locationReducer,
  reviews: reviewReducer
})

export default yomama
=======
import countriesReducer from './countriesReducer';

export default combineReducers({
  countries: countriesReducer
})
>>>>>>> 04e3068e8974b2196e39c0596c8beec062dc6aed
