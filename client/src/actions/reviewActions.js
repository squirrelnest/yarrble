import fetch from 'isomorphic-fetch';

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

export function fetchReviewsSuccess(reviews) {
  return {type: GET_REVIEWS, reviews};
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
