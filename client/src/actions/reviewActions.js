import fetch from 'isomorphic-fetch';
import { fetchLocationsSuccess } from './locationActions';
import { API_ROOT } from '../api-config';

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

/* OFFLINE MODE */

export function storeOfflineReviews(data) {
  let draft_reviews = JSON.parse(localStorage.getItem('draft_reviews'))
  // check for existing draft_reviews
  if (!draft_reviews) {
  // store first draft
    let newDraft = { draft_1: data }
    localStorage.setItem('draft_reviews', JSON.stringify([newDraft]))
  } else {
  // increment draftID then append draft to draft_reviews object
    let draftID = `draft_${Object.entries(draft_reviews).length + 1}`
    let newDraft = { [draftID]: data }
    draft_reviews.push(newDraft)
    localStorage.setItem('draft_reviews', JSON.stringify(draft_reviews))
  }
}

export function postOfflineReviews() {
  let token = "Bearer " + localStorage.getItem("jwt")
  return (dispatch) => {
    if (localStorage.getItem('draft_reviews')) {
      const draft_reviews = JSON.parse(localStorage.getItem('draft_reviews'))
      draft_reviews.forEach( (draft, index) => {
        let location_id = draft[`draft_${index + 1}`].review.location_id
        return fetch(`//${API_ROOT}/locations/${location_id}/reviews`, {
          method: "POST",
          credentials: 'same-origin',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token
          },
          body: JSON.stringify(draft[`draft_${index + 1}`].review)
        })
        .then(response => response.json())
        .then(responseJSON => {
          dispatch(fetchLocationsSuccess(responseJSON));
        })
      })
    }
  }
}

/* ASYNCS */

export function fetchReviews() {
  let token = "Bearer " + localStorage.getItem("jwt")
  return (dispatch) => {
    dispatch({ type: 'LOADING_REVIEWS' });
    return fetch(`//${API_ROOT}/myreviews`, {
      method: "GET",
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token
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
    return fetch(`//${API_ROOT}/reviews/${review_id}`, {
      method: "DELETE",
    })
    .then(response => response.json())
    .then(response => {
      dispatch(fetchReviewsSuccess(response));
    })
  }
}

export function createReview(reviewData) {
  const token = localStorage.getItem('jwt')
  const bodyData = {
    review: {
      location_id: reviewData.location_id,
      content: reviewData.content,
      stability: reviewData.stability,
      aesthetics: reviewData.aesthetics,
      safety: reviewData.safety,
      date_visited: reviewData.date_visited
    }
  }

  if (window.navigator.onLine) {
    return (dispatch) => {
      dispatch({ type: 'LOADING_REVIEWS' });
      return fetch(`//${API_ROOT}/locations/${reviewData.location_id}/reviews`, {
        method: "POST",
        credentials: 'same-origin',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(bodyData),
      })
      .then(response => response.json())
      .then(response => {
        dispatch(fetchLocationsSuccess(response));
      })
    }
  } else {
    return () => {
      storeOfflineReviews(bodyData)
    }
  }
}

export function updateReview(reviewData) {

  const bodyData = {
    review: {
      id: reviewData.review_id,
      content: reviewData.content,
      stability: reviewData.stability,
      aesthetics: reviewData.aesthetics,
      safety: reviewData.safety
    }
  }

  return (dispatch) => {
    dispatch({ type: 'LOADING_REVIEWS' });
    return fetch(`//${API_ROOT}/reviews/${reviewData.review_id}`, {
      method: "PATCH",
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyData),
    })
    .then(response => response.json())
    .then(response => {
      dispatch(fetchReviewsSuccess(response));
    })
  }
}
