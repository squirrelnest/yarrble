import fetch from 'isomorphic-fetch';
import { API_ROOT } from '../api-config';

/* ACTION TYPES */

export const AUTHENTICATED = 'AUTHENTICATED'
export const UNAUTHENTICATED = 'UNAUTHENTICATED'
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR'
export const ADD_USER = 'ADD_USER'
export const GET_USER = 'GET_USER'

/* ACTION CREATORS */

export function addUser(payload) {
  return { type: ADD_USER, payload }
}

export function getUserSuccess(payload) {
  return { type: GET_USER, payload }
}

/* ASYNCS */

export function login(loginData) {
  const bodyData = {
    auth: {
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
    .then( () => { 
      dispatch({ type: AUTHENTICATED })
    })
    .catch(function(error) {
      console.log('Oops! Invalid credentials: \n', error);
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: "Invalid email or password"
      });
    })
  }
}

export function refreshAuth() {
  if (window.localStorage.jwt) {
    return (dispatch) => { dispatch({ type: AUTHENTICATED }) }
  }
}

export function register(registrationData) {
  const bodyData = {
    user: {
      email: registrationData.email,
      password: registrationData.password,
      username: registrationData.username
    }
  }
  return (dispatch) => {
    return fetch(`//${API_ROOT}/register`, {
      method: "POST",
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyData),
    })
    .then(response => response.json())
    .then(response => dispatch(addUser(response)))
    .then(console.log('You created a new account'))
  }
}

export function logout(dispatch) {
  window.localStorage.clear()
  dispatch({ type: 'UNAUTHENTICATED' })
}

export function getUser() {
  let token = "Bearer " + localStorage.getItem("jwt")
  return (dispatch) => {
    dispatch({ type: 'LOADING_REVIEWS' });
    return fetch(`//${API_ROOT}/user`, {
      method: "GET",
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
    .then(response => response.json())
    .then(responseJSON => dispatch(getUserSuccess(responseJSON)) )
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
    return fetch(`//${API_ROOT}/users/${userData.user_id}`, {
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
    return fetch(`//${API_ROOT}:3001/users/${user_id}`, {
      method: "DELETE",
    })
    .then(response => response.json())
    .then(response => {
      dispatch(fetchUsersSuccess(response));
    })
  }
}

export function fetchUsersSuccess(response) {
  console.log('fetch successful');
}
