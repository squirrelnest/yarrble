let backendHost;

const hostname = window && window.location && window.location.hostname;

if(hostname === 'yarrble.com' || hostname === 'www.yarrble.com') {
  backendHost = 'api.yarrble.com:3001';
} else if(hostname === 'localhost') {
  backendHost = 'localhost:3001';
}
else {
  backendHost = process.env.REACT_APP_API_HOST_DEVELOPMENT;
}

export const API_ROOT = `${backendHost}`;
