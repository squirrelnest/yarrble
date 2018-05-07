import fetch from 'isomorphic-fetch';
import { fetchLocationsSuccess } from './thunks';
import { API_ROOT } from '../api-config';

/* ACTION TYPES */

export const ADD_USER = 'ADD_USER'
export const REMOVE_USER = 'REMOVE_USER'
export const GET_USERS = 'GET_USER'
export const LOADING_USERS = 'LOADING_USER'

/* ACTION CREATORS */

export function addUser(user) {
  return { type: ADD_USER, user }
}

export function removeUser(user_id) {
  return { type: REMOVE_USER, user_id }
}

export function fetchUsersSuccess(users ) {
  return { type: GET_USERS, users };
}

/* ASYNCS */

export function login(loginData) {

  const bodyData = {
    auth: {
      username: loginData.username,
      email: loginData.email,
      password: loginData.password,
    }
  }

  return (dispatch) => {
    return fetch(`//${API_ROOT}/user_token`, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyData),
    })
    .then(response => response.json())
    .then(response => localStorage.setItem("jwt", response.jwt))
  }
}

export function fetchUsers() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_USERS' });
    return fetch('http://localhost:3001/users', {
      method: "GET",
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(response => {
      dispatch(fetchUsersSuccess(response));
    })
  }
}

export function createUser(userData) {

  const bodyData = {
    user: {
      location_id: userData.location_id,
      content: userData.content,
      stability: userData.stability,
      aesthetics: userData.aesthetics,
      safety: userData.safety,
      date_visited: userData.date_visited,
      user_id: 1
    }
  }

  return (dispatch) => {
    dispatch({ type: 'LOADING_USERS' });
    return fetch(`http://localhost:3001/locations/${userData.location_id}/users`, {
      method: "POST",
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyData),
    })
    .then(response => response.json())
    .then(response => {
      dispatch(fetchLocationsSuccess(response));
    })
  }
}

export function updateUser(userData) {

  const bodyData = {
    user: {
      id: userData.user_id,
      content: userData.content,
      stability: userData.stability,
      aesthetics: userData.aesthetics,
      safety: userData.safety,
      user_id: 1
    }
  }

  return (dispatch) => {
    dispatch({ type: 'LOADING_USERS' });
    return fetch(`http://localhost:3001/users/${userData.user_id}`, {
      method: "PATCH",
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyData),
    })
    .then(response => response.json())
    .then(response => {
      dispatch(fetchUsersSuccess(response));
    })
  }
}

export function deleteUser(user_id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_USERS' });
    return fetch(`http://localhost:3001/users/${user_id}`, {
      method: "DELETE",
    })
    .then(response => response.json())
    .then(response => {
      dispatch(fetchUsersSuccess(response));
    })
  }
}
