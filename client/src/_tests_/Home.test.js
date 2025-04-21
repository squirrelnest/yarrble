// import React from 'react';
// import ReactDOM from 'react-dom';
// import Adapter from 'enzyme-adapter-react-16';
// import { shallow, mount, configure, render } from 'enzyme';
// import configureStore from 'redux-mock-store';

// import { createLocation, deleteLocation, postOfflineData } from '../actions/locationActions';
// import Home from '../containers/Home';
// import { LocationList } from '../containers/LocationList';
// import { mapStateToProps, mapDispatchToProps } from '../containers/Home';

// jest.mock("mapbox-gl", () => { return {} });

// // initialize enzyme

// configure({ adapter: new Adapter() })

// // create mock Redux store

// const mockStore = configureStore();
// const initialState = {
//   reviews: [
//     {review_id: 0}
//   ],
//   locations: [
//     {location_id: 0}
//   ],
//   auth: {}
// };
// const store = mockStore(initialState);

// // unit test

// describe('Home component', () => {

//   let wrapper
//   let event

//   beforeEach(() => {
//     wrapper = shallow(<Home store={store}/>)
//     global.console = {
//       warn: jest.fn(),
//       log: jest.fn()
//     }
//   })

//   test("initially has nothing in localStorage", () => {
//     expect(localStorage.getItem('drafts')).toEqual(null)
//   })

//   test('[ONLINE] adds new location', () => {

//   });

//   test('[OFFLINE] stores draft of new location', () => {
//     // window.navigator = {
//     //   onLine: false
//     // }
//     // const isOffline = jest.fn()
//     // expect(global.console.log).toHaveBeenCalled()
//   });

// });
