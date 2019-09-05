import React, { Component, Fragment } from "react";
import Header from "../../organisms/Header/Header.jsx";
import "../Product/Product.scss";

class ProductPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Header
                    handleSearch={this.handleSearch}
                    handleChange={this.handleChange} />
                    <div className="container">
                    </div>
            </Fragment>
        )
    }
}