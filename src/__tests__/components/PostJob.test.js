import React from 'react';
import { shallow } from 'enzyme';

// components
import PostJob from '../components/PostJob';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<PostJob />);
});

describe('Testing PostJob component', () => {
  it('should render an h1 heading with the correct text', () => {
    expect(wrapper.find('h1').text().toEqual('PostJob'));
  });
});