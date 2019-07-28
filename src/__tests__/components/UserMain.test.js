import React from 'react';
import { shallow } from 'enzyme';

// components
import UserMain from '../../components/UserMain';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<UserMain />);
});

describe('Testing UserMain component', () => {
  it('should render an h1 heading with the correct text', () => {
    expect(wrapper.find('h1').text().toEqual('UserMain'));
  });
  it('it should match the UserMain snapshot', () => {
    // If snapshot exists, compare. If not, create the snapshot.
    expect(wrapper).toMatchSnapshot();
  });
});