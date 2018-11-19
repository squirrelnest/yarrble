import fetch from 'isomorphic-fetch';
import { API_ROOT } from '../api-config';

export function fetchCountries() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_COUNTRIES' });
    return fetch(`http://${API_ROOT}/geojson`)
      .then(response => response.json())
      .then(responseJSON => {
        dispatch({
          type: 'FETCH_COUNTRIES',
          nicknames: responseJSON.nicknames
        })
      })
  }
}
