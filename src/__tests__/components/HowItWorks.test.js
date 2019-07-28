import React from 'react';
import { shallow } from 'enzyme';

// components
import HowItWorks from '../components/HowItWorks';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<HowItWorks />);
});

describe('Testing HowItWorks component', () => {
  it('should render an h1 heading with the correct text', () => {
    expect(wrapper.find('h1').text().toEqual('HowItWorks'));
  });
});