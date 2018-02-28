import fetch from 'isomorphic-fetch';
import { ADD_LOCATION, REMOVE_LOCATION } from './locationActions';

export const GET_LOCATIONS = 'GET_LOCATIONS';
export const LOADING_LOCATIONS = 'LOADING_LOCATIONS';

export function fetchLocations() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_LOCATIONS' });
    return fetch('http://localhost:3001/', {
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

  return (dispatch) => {
    return fetch('http://localhost:3001/locations', {
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
}

export function createLocationSuccess(payload) {
  return {type: ADD_LOCATION, payload};
}

export function deleteLocation(location_id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_LOCATIONS' });
    return fetch(`http://localhost:3001/locations/${location_id}`, {
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