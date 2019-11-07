import React from 'react';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme';
import ImputSearch from './ImputSearch';

describe('MyComponent', () => {
  it('should render correctly with props', () => {
    const props = {
      type: '',
      placeholder: '',
      handleChange: jest.fn(),
      handleSearch: jest.fn()
    }

    const wrapper = shallow(<ImputSearch {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  // it('should render correctly with no props', () => {
  //   const component = shallow(<ImputSearch/>);
  //   expect(component).toMatchSnapshot();
  // });
});