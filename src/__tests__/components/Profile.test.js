import React from 'react';
import { shallow } from 'enzyme';

// components
import Profile from '../../components/Profile';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Profile />);
});

describe('Testing Profile component', () => {
  it('should render an h1 heading with the correct text', () => {
    expect(wrapper.find('h1').text().toEqual('Profile'));
  });
});