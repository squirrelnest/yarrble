import fetch from 'isomorphic-fetch';

export const GET_LOCATIONS = 'GET_LOCATIONS';
export const LOADING_LOCATIONS = 'LOADING_LOCATIONS';

export function fetchLocationsSuccess(payload) {
  return {type: GET_LOCATIONS, payload};
}

export function fetchLocations() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_LOCATIONS' });
    return fetch('http://localhost:3001/', {
      method: "GET",
      credentials: 'same-origin',
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
