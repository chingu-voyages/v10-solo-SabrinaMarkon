import React from 'react';
import { shallow } from 'enzyme';

// components
import Contact from '../../components/Contact';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Contact />);
});

describe('Testing Contact component', () => {
  it('should render an h1 heading with the correct text', () => {
    expect(wrapper.find('h1').text().toEqual('Contact'));
  });
  it('it should match the Contact snapshot', () => {
    // If snapshot exists, compare. If not, create the snapshot.
    expect(wrapper).toMatchSnapshot();
  });
});