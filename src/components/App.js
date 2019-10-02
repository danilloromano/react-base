import React, { Component } from "react";
import Header from "./organisms/Header/Header.jsx";
import Home from "../components/pages/Home/Home.jsx";
import ProductPage from "../components/pages/Product/Product.jsx";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { getProductsByName, getInitialSearch, getProductById } from "../infra/Calls";

import "./App.scss";
import "../assets/variables/reset.scss";

 class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            searchText: '',
            loading: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleInitialSearch = this.handleInitialSearch.bind(this);
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

    render() {
        return (
            <Router>
                <Header
                    handleSearch={this.handleSearch}
                    handleChange={this.handleChange}/>
                <div className="container">
                    <Route exact path={'/'} component={() => 
                        <Home 
                            products={this.state.products}
                        />
                    }/>
                    <Route exact path={'/:id'} component={ProductPage}/>
                </div>
            </Router>
        )
    }
}

export default App;