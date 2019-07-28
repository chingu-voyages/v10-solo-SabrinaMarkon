import React from 'react';
import { shallow } from 'enzyme';

// components
import Jobs from '../components/Jobs';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Jobs />);
});

describe('Testing Jobs component', () => {
  it('should render an h1 heading with the correct text', () => {
    expect(wrapper.find('h1').text().toEqual('Jobs'));
  });
});