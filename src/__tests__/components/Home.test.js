import React from 'react';
import { shallow } from 'enzyme';

// components
import Home from '../../components/Home';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Home />);
});

describe('Testing Home component', () => {
  it('should render an h1 heading with the correct text', () => {
    expect(wrapper.find('h1').text().toEqual('Home'));
  });
  it('it should match the Home snapshot', () => {
    // If snapshot exists, compare. If not, create the snapshot.
    expect(wrapper).toMatchSnapshot();
  });
});