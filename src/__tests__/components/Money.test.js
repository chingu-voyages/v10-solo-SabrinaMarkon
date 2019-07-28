import React from 'react';
import { shallow } from 'enzyme';

// components
import Money from '../../components/Money';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Money />);
});

describe('Testing Money component', () => {
  it('should render an h1 heading with the correct text', () => {
    expect(wrapper.find('h1').text().toEqual('Money'));
  });
  it('it should match the Money snapshot', () => {
    // If snapshot exists, compare. If not, create the snapshot.
    expect(wrapper).toMatchSnapshot();
  });
});