import { combineReducers } from '@reduxjs/toolkit';
import locationReducer from './locationReducer';
import reviewReducer from './reviewReducer';
import authReducer from './authReducer';

const yomama = combineReducers({
  locations: locationReducer,
  reviews: reviewReducer,
  auth: authReducer
})

export default yomama;
