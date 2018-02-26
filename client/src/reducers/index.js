import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import reviewReducer from './reviewReducer';

const yomama = combineReducers({
  locationReducer,
  reviewReducer
})

export default yomama
