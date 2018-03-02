import fetch from 'isomorphic-fetch';
import { fetchLocationsSuccess } from './thunks';

/* ACTION TYPES */

export const ADD_REVIEW = 'ADD_REVIEW'
export const REMOVE_REVIEW = 'REMOVE_REVIEW'
export const GET_REVIEWS = 'GET_REVIEW'
export const LOADING_REVIEWS = 'LOADING_REVIEW'

/* ACTION CREATORS */

export function addReview(review) {
  return { type: ADD_REVIEW, review }
}

export function removeReview(review_id) {
  return { type: REMOVE_REVIEW, review_id }
}

export function fetchReviewsSuccess(reviews ) {
  return { type: GET_REVIEWS, reviews };
}

/* ASYNCS */

export function fetchReviews() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_REVIEWS' });
    return fetch('http://localhost:3001/reviews', {
      method: "GET",
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(response => {
      dispatch(fetchReviewsSuccess(response));
    })
  }
}

export function deleteReview(review_id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_REVIEWS' });
    return fetch(`http://localhost:3001/reviews/${review_id}`, {
      method: "DELETE",
    })
    .then(response => response.json())
    .then(response => {
      dispatch(fetchReviewsSuccess(response));
    })
  }
}

export function createReview(reviewData) {

  const bodyData = {
    review: {
      location_id: reviewData.location_id,
      content: reviewData.content,
      stability: reviewData.stability,
      aesthetics: reviewData.aesthetics,
      safety: reviewData.safety,
      date_visited: reviewData.date_visited,
      user_id: 1
    }
  }

  return (dispatch) => {
    dispatch({ type: 'LOADING_REVIEWS' });
    return fetch(`http://localhost:3001/locations/${reviewData.location_id}/reviews`, {
      method: "POST",
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyData),
    })
    .then(response => response.json())
    .then(response => {
      dispatch(fetchLocationsSuccess(response));
    })
  }
}
