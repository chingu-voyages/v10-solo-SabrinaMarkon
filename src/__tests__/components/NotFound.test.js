import React from 'react';
import { shallow } from 'enzyme';

// components
import NotFound from '../../components/NotFound';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<NotFound />);
});

describe('Testing NotFound component', () => {
  it('should render an h1 heading with the correct text', () => {
    expect(wrapper.find('h1').text().toEqual('NotFound'));
  });
});