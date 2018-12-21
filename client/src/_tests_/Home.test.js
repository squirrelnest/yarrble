import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, configure, render } from 'enzyme';

import { createLocation, deleteLocation, postOfflineData } from '../actions/locationActions';
import { Home } from '../containers/Home';

// initialize enzyme

configure({ adapter: new Adapter() })

// UNIT TEST SUITE

describe('Home component', () => {

  let wrapper
  let event

  beforeEach(() => {
    wrapper = shallow(<Home />)
  })

  it("initially has nothing in localStorage", () => {
    expect(localStorage.getItem('drafts')).toEqual(null)
  })

  it('[ONLINE] adds new location', () => {

  });

  it('[OFFLINE] stores draft of new location', () => {

  });

});
