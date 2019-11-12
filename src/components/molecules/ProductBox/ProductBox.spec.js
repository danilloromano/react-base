import React from 'react';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme';
import ProductBox from './ProductBox';

describe('ProductBox test', () => {
    it('should render correctly with props', () => {
        const props = {
            description: 'Apple iPhone 8 Plus 256 Gb Gris Espacial',
            price: 129999,
            image: 'http://mla-s2-p.mlstatic.com/951232-MLA31003080341_062019-I.jpg',
            location: 'Capital Federal',
            id: 'MLA820795723'
        }

        const wrapper = shallow(<ProductBox {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    });

});