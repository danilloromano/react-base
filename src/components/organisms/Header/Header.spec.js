import React from 'react';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header test', () => {
    it('should render correctly with props', () => {
        const props = {
            handleChange: jest.fn(),
            handleSearch:jest.fn()
        }

        const wrapper = shallow(<Header {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    });

});