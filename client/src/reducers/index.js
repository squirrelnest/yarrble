import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import reviewReducer from './reviewReducer';

const yomama = combineReducers({
  locations: locationReducer,
  reviews: reviewReducer
})

export default yomama
