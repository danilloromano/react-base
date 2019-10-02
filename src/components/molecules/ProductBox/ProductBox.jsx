import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

import "./ProductBox.scss";

 export const ProductBox = (props) => {
    const { description, price, image, location, id} = props;

    return (
            <Link to={`/${id}`} className="product-box__container" key={id}>
                <div className="product-box__image-container">
                    <img className="product-box__image" src={image} alt="product image"/>
                </div>
                <div className="product-box__descriptions">
                    <h2 className="product-box__price">{price}</h2>
                    <p className="product-box__title">{description}</p>
                </div>
                <div className="product-box__location">{location}</div>
            </Link>
    )
}

ProductBox.propTypes = {
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    location:PropTypes.string.isRequired
}

export default ProductBox;
