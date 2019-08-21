import React from "react";
import PropTypes from "prop-types";

import "./ProductBox.scss";

 const ProductBox = (props) => {

    const {description, price, image, location, id} = props;

    return (
        <div className="product-box__container" key={id}>
            <div className="product-box__image-container">
                <img className="product-box__image" src={image} alt="product image"/>
            </div>
            <div className="product-box__descriptions">
                <h2 className="product-box__price">{price}</h2>
                <p className="product-box__title">{description}</p>
            </div>
            <div className="product-box__location">{location}</div>
        </div>
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
