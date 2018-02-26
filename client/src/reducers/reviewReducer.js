import {
  ADD_REVIEW,
  REMOVE_REVIEW,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from '../actions/reviewActions'

let id = 100;

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  reviews: []
}

/* Object.assign(target, source object, source object) copies values from one or more source objects to the target object then returns the target object */

export default function reviewReducer(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    case ADD_REVIEW:
      id++;
      const review = Object.assign({}, action.review, { id: id })
      return { reviews: state.reviews.concat(review) }
    case REMOVE_REVIEW:
      const reviews = state.reviews.filter(review => review.id !== action.id)
      return { reviews }
    default:
      return state
  }
}
