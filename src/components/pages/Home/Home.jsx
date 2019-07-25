import React, { Component, Fragment } from "react";
import Header from "../../organisms/Header/Header.jsx";
import ProductBox from '../../molecules/ProductBox/ProductBox.jsx'
import { getProductsByName, getInitialSearc } from "../../../infra/Calls.js"

import "../Home/Home.scss";

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

    componentDidMount() {
        this.handleInitialSearch()
    }

    handleChange(event) {
        this.setState({ searchText: event.target.value });
    }

    handleInitialSearch() {
        getInitialSearc().then(res => {
            const products = res.data.results;
            this.setState({ products });
        })
        .catch(error => console.log(error))
    }

    handleSearch() {
        getProductsByName(this.state.searchText)
            .then(res => {
                const products = res.data.results;
                this.setState({ products });
            })
            .catch(error => console.log(error))
    }

    handleList() {
        this.state.products.length ? this.state.products : [];

        let boxes =  this.state.products.map( item => {
            const {title, price, thumbnail, address:{state_name}} = item;

            return (
                <div className="container__product" key={item.id}> 
                    <ProductBox 
                        description={title}
                        price={price} 
                        image={thumbnail} 
                        location={state_name} />
                </div>
            )
        })
        return boxes;
    }

    render() {
        return (
            <Fragment>
                <Header
                    handleSearch={this.handleSearch}
                    handleChange={this.handleChange} />
                    <div className="container">
                        {this.handleList()}
                    </div>
            </Fragment>
        )
    }
}

export default Home;

