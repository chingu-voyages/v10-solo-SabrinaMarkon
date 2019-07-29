import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

// components
import MakeTeam from '../../components/MakeTeam';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<MakeTeam />);
});

describe('Testing MakeTeam component', () => {
  it('should render an h1 heading with the correct text', () => {
    expect(wrapper.find('h1').text().toEqual('Build a Dev Team!'));
  });
  it('it should match the MakeTeam snapshot', () => {
    // If snapshot exists, compare. If not, create the snapshot.
    expect(wrapper).toMatchSnapshot();
  });
});