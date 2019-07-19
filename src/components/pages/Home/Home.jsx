import React, { Component, Fragment } from "react";
import Header from "../../organisms/Header/Header.jsx";
import { getProductsByName } from "../../../infra/Calls.js"

import "../Home/Home.scss";
// import "../../../assets/variables/reset.scss";


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            searchText: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange(event) {
        this.setState({ searchText: event.target.value });
        console.log('_____________________',this.state.searchText)
    }


    handleSearch() {
        getProductsByName(this.state.searchText)
            .then(res => {
                const products = res.data;
                this.setState({ products });
                console.log('_____________________',this.state.products.results)

            })
            .catch(error => console.log(error))
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

export default Home;

