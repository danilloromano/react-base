import React, { Component } from "react";
import PropTypes from "prop-types";
import { getProductsByName } from "../../../infra/Calls.js"

import "./ImputSearch.scss";

class ImputSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            search: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

    }


    handleChange(event) {
        this.setState({ search: event.target.value });
        console.log(' handleChange sttaaaaaaaate', this.state)
    }


    handleSearch() {
        getProductsByName(this.state.search)
            .then(res => {
                const products = res.data;
                this.setState({ products });
                console.log(' handleSearch sttaaaaaaaate', this.state)
            })
            .catch(error => console.log(error))
    }

    componentDidMount() { }

    render() {
        const { type, placeholder } = this.props;

        return (
            <div className="imput-search__wrapper">
                <input
                    type = {type}
                    placeholder = {placeholder}
                    className = "imput-search"
                    onChange = {this.handleChange}
                    />
                <button className="imput-search__button" onClick = {this.handleSearch}>
                    <img className="imput-search__icon" src="../src/assets/images/ic_Search.png" />
                </button>
            </div>
        )
    }
}

ImputSearch.propTypes = {
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}

export default ImputSearch;
