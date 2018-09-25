let backendHost

const hostname = global && global.location && global.location.hostname;
// const hostname = window && window.location && window.location.hostname;
// const hostname = 'localhost'

if (hostname === 'yarrble.com') {
  backendHost = 'yarrble.com:3001'
} else if (hostname === 'localhost') {
  backendHost = 'localhost:3001'
}
// else {
//   backendHost = process.env.REACT_APP_API_HOST_DEVELOPMENT;
// }

export const API_ROOT = `${backendHost}`
