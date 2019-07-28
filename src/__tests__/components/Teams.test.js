import React from 'react';
import { shallow } from 'enzyme';

// components
import Teams from '../../components/Teams';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Teams />);
});

describe('Testing Teams component', () => {
  it('should render an h1 heading with the correct text', () => {
    expect(wrapper.find('h1').text().toEqual('Teams'));
  });
});