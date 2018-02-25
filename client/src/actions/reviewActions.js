/* ACTION TYPES */

export const ADD_REVIEW = 'ADD_REVIEW'
export const REMOVE_REVIEW = 'REMOVE_REVIEW'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/* OTHER CONSTANTS */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ONE: 'SHOW_ONE'
}

/* ACTION CREATORS */

export function addReview(review) {
  return { type: ADD_REVIEW, review }
}

export function removeReview(review_id) {
  return { type: REMOVE_REVIEW, review_id }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}
