import { combineReducers } from 'redux';
import locations from './locationReducer';
import reviews from './reviewReducer';

const yomama = combineReducers({
  locations,
  reviews
})

export default yomama
