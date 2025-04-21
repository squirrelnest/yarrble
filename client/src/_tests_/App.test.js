// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from '../App';
// import Adapter from 'enzyme-adapter-react-16';
// import { shallow, mount, configure, render } from 'enzyme';
// import configureStore from 'redux-mock-store';

// jest.mock("mapbox-gl", () => { return {} });

// // initialize enzyme

// configure({ adapter: new Adapter() })

// // create mock Redux store

// const mockStore = configureStore();
// const initialState = {
//   auth: {
//     error: 'boop'
//   },
//   reviews: {
//     selectedAvatar: 0,
//   },
//   locations: [
//     {
//       name: 'Green Gator',
//       image: 'https://cdn.alligator.io/images/avatars/green-gator.jpg',
//     }
//   ],
// };
// const store = mockStore(initialState);

// // unit tests

// test.skip('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App store={store}/>, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
