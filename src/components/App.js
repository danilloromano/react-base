import React, { Component, Fragment  } from "react";
import Header from "./organisms/Header/Header.jsx";
import Home from "../components/pages/Home/Home.jsx";
import ProductPage from "../components/pages/Product/Product.jsx";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { getProductsByName, getInitialSearch, getProductById } from "../infra/Calls";

import "./App.scss";
import "../assets/variables/reset.scss";
import { match } from "minimatch";

 class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            product: [],
            params: null,
            searchText: '',
            loading: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleInitialSearch = this.handleInitialSearch.bind(this);
        this.handleSearchById = this.handleSearchById.bind(this);

    }

    componentDidMount() {
        this.handleInitialSearch();
    }

    handleChange(event) {
        this.setState({ searchText: event.target.value });
    }

    handleInitialSearch() {
        this.setState({ loading: true });
        getInitialSearch().then(res => {
            this.setState({ products: res.data.results ? res.data.results : [], loading: false });   
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

    handleSearchById(id) {
        getProductById(id)
            .then(res => {
                const product = res.data.results;
                this.setState({ product });
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <Router>
                <Header
                    handleSearch={this.handleSearch}
                    handleChange={this.handleChange}/>
                <div className="container">
                    <Route path={'/'} render={() => (
                        <Fragment>
                            <Home 
                                products={this.state.products}
                                handleSearchById={this.handleSearchById}/>
                        </Fragment>
                    )}/>
                    <Route path={'/product/:id'} render={() => (
                        <Fragment>  
                            <ProductPage 
                                product={this.state.product}
                                handleSearch={this.handleSearchById}
                            />
                        </Fragment>
                    )}/>  
                </div>
            </Router>
        )
    }
}

export default App;