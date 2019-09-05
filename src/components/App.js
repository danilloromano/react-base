import React, { Component } from "react";
import Home from "../components/pages/Home/Home.jsx"
import { getProductsByName, getInitialSearch } from "../infra/Calls"
import "./App.scss";
import "../assets/variables/reset.scss"

 class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            product: [],
            searchText: '',
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
        getInitialSearch().then(res => {
            const products = res.data.results;
            this.setState({ products });
            console.log(`products`, products)
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
            <div>
                <Home 
                    handleChange={this.handleChange}
                    handleInitialSearch={this.handleInitialSearch}
                    handleSearch={this.handleSearch}
                    products={this.state.products}
                    searchText={this.state.searchText}
                />
            </div>
        )
    }
}

export default App;