import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

// components
import App from '../../containers/App';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

describe('Testing App component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('should render an h1 heading with the correct text', () => {
    expect(wrapper.find('h1').text().toEqual('App'));
  });
  it('it should match the App snapshot', () => {
    // If snapshot exists, compare. If not, create the snapshot.
    expect(wrapper).toMatchSnapshot();
  });
});