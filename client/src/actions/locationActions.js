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
  let drafts = JSON.parse(localStorage.getItem('drafts'))
  // check for existing drafts
  if (!drafts) {
  // store draft
    let newDraft = { draft_1: data }
    localStorage.setItem('drafts', JSON.stringify([newDraft]))
  } else {
  // increment draftID then append draft to drafts object
    let draftID = `draft_${Object.entries(drafts).length + 1}`
    let newDraft = { [draftID]: data }
    drafts.push(newDraft)
    localStorage.setItem('drafts', JSON.stringify(drafts))
  }
}

export function postOfflineData() {

  const drafts = JSON.parse(localStorage.getItem('drafts'))

  drafts.forEach( (draft, index) => createLocation( draft[`draft_${index}`] ) )

  // return () => {
  //   createLocation(draft)
  // }
}

/* API CALLS */

/* A promise or thenable is an object that may yield a value in the future (either a resolved value or an error message) */
/* Asynchronous code is single-threaded but multi-tasking - one code can run before another code completes */

export function fetchLocations() {
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

export function createLocation(locationData) {

  const bodyData = {
    location: {
      nickname: locationData.nickname,
      lon: Number(locationData.longitude),
      lat: Number(locationData.latitude),
      country: locationData.country,
      reviews_attributes: [{
        stability: Number(locationData.stability),
        aesthetics: Number(locationData.aesthetics),
        safety: Number(locationData.safety),
        date_visited: locationData.date_visited,
        content: locationData.content,
        user_id: 1,
      }]
    }
  }

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
      .then(response => {
        dispatch(createLocationSuccess(response));
      })
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
  return (dispatch) => {
    dispatch({ type: 'LOADING_LOCATIONS' });
    return fetch(`//${API_ROOT}/locations/${location_id}`, {
      method: "DELETE",
    })
    .then(response => response.json())
    .then(response => {
      dispatch(deleteLocationSuccess(response));
    })
  }
}

export function deleteLocationSuccess(payload) {
  return {type: GET_LOCATIONS, payload};
}
