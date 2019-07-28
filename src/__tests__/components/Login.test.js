import React from 'react';
import { shallow } from 'enzyme';

// components
import Login from '../../components/Login';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Login />);
});

describe('Testing Login component', () => {
  it('should render an h1 heading with the correct text', () => {
    expect(wrapper.find('h1').text().toEqual('Login'));
  });
  it('it should match the Login snapshot', () => {
    // If snapshot exists, compare. If not, create the snapshot.
    expect(wrapper).toMatchSnapshot();
  });
});