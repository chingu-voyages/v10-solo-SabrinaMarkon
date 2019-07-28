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
});