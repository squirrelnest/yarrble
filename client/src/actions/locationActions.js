import fetch from 'isomorphic-fetch';
import { API_ROOT } from '../api-config';

/* ACTION TYPES */

export const GET_LOCATIONS = 'GET_LOCATIONS'
export const LOADING_LOCATIONS = 'LOADING_LOCATIONS'
export const ADD_LOCATION = 'ADD_LOCATION'
export const REMOVE_LOCATION = 'REMOVE_LOCATION'

/* ACTION CREATORS */

export function addLocation(location) {
  return { type: ADD_LOCATION, location }
}

export function removeLocation(location_id) {
  return { type: REMOVE_LOCATION, location_id }
}

/* OFFLINE MODE */

export function storeOfflineData(data) {
  let draft_locations = JSON.parse(localStorage.getItem('draft_locations'))
  // check for existing draft_locations
  if (!draft_locations) {
  // store first draft
    let newDraft = { draft_1: data }
    localStorage.setItem('draft_locations', JSON.stringify([newDraft]))
  } else {
  // increment draftID then append draft to draft_locations object
    let draftID = `draft_${Object.entries(draft_locations).length + 1}`
    let newDraft = { [draftID]: data }
    draft_locations.push(newDraft)
    localStorage.setItem('draft_locations', JSON.stringify(draft_locations))
  }
}

export function postOfflineData(dispatch) {
  return (dispatch) => {
    if (localStorage.getItem('draft_locations')) {
      const draft_locations = JSON.parse(localStorage.getItem('draft_locations'))
      draft_locations.forEach( (draft, index) => {

        return fetch(`//${API_ROOT}/locations`, {
          method: "POST",
          credentials: 'same-origin',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(draft[`draft_${index + 1}`].location)
        })
        .then(response => response.json())
        .then(responseJSON => {
          dispatch(createLocationSuccess(responseJSON));
        })
      })
    }
  }
}

/* API CALLS */

/* A promise or thenable is an object that may yield a value in the future (either a resolved value or an error message) */
/* Asynchronous code is single-threaded but multi-tasking - one code can run before another code completes */

export function fetchLocations() {
  if (!window.navigator.onLine) {
    return (dispatch) => {
      let locationsCache = JSON.parse(localStorage.getItem('cachedLocations'));
      dispatch(fetchLocationsSuccess(locationsCache));
    }
  } else {
    return (dispatch) => {
      dispatch({ type: 'LOADING_LOCATIONS' });
      return fetch(`//${API_ROOT}/locations`, {
        method: "GET",
        credentials: 'omit',  /* other options: include, same-origin */
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(response => {
        dispatch(fetchLocationsSuccess(response));
      })
    }
  }
}

export function fetchNearbyLocations() {
  let lon = localStorage.getItem('lon');
  let lat = localStorage.getItem('lat');
  return (dispatch) => {
    dispatch({ type: 'LOADING_LOCATIONS' });
    return fetch(`//${API_ROOT}/locations/nearby/${lon}/${lat}`, {
      method: "GET",
      credentials: 'omit',  /* other options: include, same-origin */
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(response => {
      dispatch(fetchLocationsSuccess(response));
    })
  }
}

export function fetchLocationsSuccess(payload) {
  return {type: GET_LOCATIONS, payload};
}

export function createLocation(locationData, user_id) {

  const bodyData = {
    location: {
      nickname: locationData.nickname,
      lon: Number(locationData.longitude),
      lat: Number(locationData.latitude),
      country: locationData.country,
      depth: locationData.depth,
      reviews_attributes: [{
        stability: Number(locationData.stability),
        aesthetics: Number(locationData.aesthetics),
        safety: Number(locationData.safety),
        date_visited: locationData.date_visited,
        content: locationData.content,
        user_id: user_id || 1,
      }]
    },
    windProtection: locationData.windProtection,
    amenities: locationData.amenities,
  }
// post user input if online, store user input if offline
  if (window.navigator.onLine) {
    return (dispatch) => {
      return fetch(`//${API_ROOT}/locations`, {
        method: "POST",
        credentials: 'same-origin',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
      })
      .then(response => response.json())
      .then(response => dispatch(createLocationSuccess(response)))
    }
  } else {
    return () => {
      storeOfflineData(bodyData)
    }
  }
}

export function createLocationSuccess(location) {
  return {type: ADD_LOCATION, location};
}

export function deleteLocation(location_id) {
  let token = "Bearer " + localStorage.getItem("jwt")
  return (dispatch) => {
    dispatch({ type: 'LOADING_LOCATIONS' });
    return fetch(`//${API_ROOT}/locations/${location_id}`, {
      method: "DELETE",
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
    .then(response => {
        if (response.status === '200') {
          dispatch(deleteLocationSuccess(response))
        } else {
          dispatch(fetchLocations())
        }
      }
    )
  }
}

export function deleteLocationSuccess(payload) {
  return {type: GET_LOCATIONS, payload};
}
