import React from 'react';
import { shallow } from 'enzyme';

// components
import HowItWorks from '../../components/HowItWorks';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<HowItWorks />);
});

describe('Testing HowItWorks component', () => {
  it('should render an h1 heading with the correct text', () => {
    expect(wrapper.find('h1').text().toEqual('HowItWorks'));
  });
  it('it should match the HowItWorks snapshot', () => {
    // If snapshot exists, compare. If not, create the snapshot.
    expect(wrapper).toMatchSnapshot();
  });
});