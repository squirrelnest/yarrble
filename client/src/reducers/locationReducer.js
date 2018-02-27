import {
  ADD_LOCATION,
  REMOVE_LOCATION,
} from '../actions/locationActions';

import {
  GET_LOCATIONS,
  LOADING_LOCATIONS
} from '../actions/thunks';

const initialState = {
  locations: []
}

/* Object.assign(target, source object, source object) copies values from one or more source objects to the target object then returns the target object */

export default function locationReducer(state = initialState, action) {
  switch (action.type) {

    case LOADING_LOCATIONS:
      return { locations: [] }

    case GET_LOCATIONS:
      return { locations: action.payload }

    case ADD_LOCATION:
      return { locations: state.locations.concat(action.payload) }

    case REMOVE_LOCATION:
      const locations = state.locations.filter(location => location.location_id !== action.location_id)
      return { locations }

    default:
      return state
  }
}
