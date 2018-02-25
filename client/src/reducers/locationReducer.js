import {
  ADD_LOCATION,
  REMOVE_LOCATION,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from '../actions/locationActions'

let id = 100;

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  locations: []
}

/* Object.assign(target, source object, source object) copies values from one or more source objects to the target object then returns the target object */

export default function locations(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    case ADD_LOCATION:
      id++;
      const location = Object.assign({}, action.location, { id: id })
      return { locations: state.locations.concat(location) }
    case REMOVE_LOCATION:
      const locations = state.locations.filter(location => location.id !== action.id)
      return { locations }
    default:
      return state
  }
}
