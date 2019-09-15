import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import ProductBox from '../../molecules/ProductBox/ProductBox.jsx'
import "../Home/Home.scss";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    handleList() {
        let boxes =  this.props.products && this.props.products.map( item => {

            const {id, title, price, thumbnail, address:{state_name}} = item;

            return (
                <ProductBox  key={id}
                    id={id}
                    description={title}
                    price={price} 
                    image={thumbnail} 
                    location={state_name} 
                />
            )
        })
        return boxes;
    }

    render() {
        return (
            <Fragment>
                {this.handleList()}
            </Fragment>
        )
    }
}

Home.propTypes = {
    products: PropTypes.array.isRequired,
}

export default Home;

