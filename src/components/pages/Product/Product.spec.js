import React from 'react';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme';
import Product from './Product';
import { getProductById, getDetailProductById } from "../../../infra/Calls";


describe('Product test', () => {

    const defaultProps = {
        match: {
            params: { id: "MLA820795723" }
        }
    }

    const defaultState = {
        product: {
            available_quantity: 1,
            condition: "new",
            currency_id: "ARS",
            id: "MLA820795723",
            initial_quantity: 16,
            pictures: [{
                0: { secure_url: "https://mla-s2-p.mlstatic.com/951232-MLA31003080341_062019-O.jpg" }
            }],
            domain_id: "MLA-CELLPHONES",
            price: 129999,
        },
        descriptions: {
            plain_text: "Una mente brillante.↵El iPhone 8 es ..."
        }
    }

    it('should render correctly with state', () => {
        const wrapper = shallow(<Product {...defaultState} {...defaultProps} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    });

});