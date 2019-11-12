import React from 'react';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme';
import ImputSearch from './ImputSearch';

describe('MyComponent', () => {

  const props = {
    type: '',
    placeholder: '',
    handleChange: jest.fn(),
    handleSearch: jest.fn()
  }

  it('should render correctly with props', () => {
    const wrapper = shallow(<ImputSearch {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('button click should call handleSearch function', () => {
    const component = shallow(<ImputSearch  {...props}/>);
    component.find('.imput-search__button').simulate('click');
    expect(props.handleSearch).toHaveBeenCalled();
  });
  
});