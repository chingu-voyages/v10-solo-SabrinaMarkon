import React from 'react';
import { shallow } from 'enzyme';

// components
import Signup from '../components/Signup';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Signup />);
});

describe('Testing Signup component', () => {
  it('should render an h1 heading with the correct text', () => {
    expect(wrapper.find('h1').text().toEqual('Signup'));
  });
});