import React, { Component, Fragment } from "react";
import "../Product/Product.scss";

class ProductPage extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    componentDidMount() {
        const { match: { params }, handleSearch } = this.props;
        handleSearch(params);
    }

    render() {
        const { product } = this.props;

        return (
            <Fragment>
                <p>pagina de produto {product &&product.id}</p>
            </Fragment>
        )
    }
}

export default ProductPage;
