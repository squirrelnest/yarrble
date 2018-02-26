import {
  ADD_LOCATION,
  REMOVE_LOCATION,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from '../actions/locationActions'

let id = 100;

const initialState = {
  locations: []
}

/* Object.assign(target, source object, source object) copies values from one or more source objects to the target object then returns the target object */

export default function locationReducer(state = [], action) {
  switch (action.type) {
    case ADD_LOCATION:
      id++;
      const location = Object.assign({}, action.location, { id: id })
      return { locations: state.concat(location) }
    case REMOVE_LOCATION:
      const locations = state.filter(location => location.location_id !== action.location_id)
      return { locations }
    default:
      return state
  }
}
