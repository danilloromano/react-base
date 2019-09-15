import React, { Component } from "react";
import PropTypes from "prop-types";

import "./ImputSearch.scss";

class ImputSearch extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { type, placeholder, handleChange, handleSearch } = this.props;

        return (
            <div className="imput-search__wrapper">
                <input
                    type = {type}
                    placeholder = {placeholder}
                    className = "imput-search"
                    onChange = {handleChange}/>
                <button className="imput-search__button" onClick = {handleSearch}>
                    <img className="imput-search__icon" src="../src/assets/images/ic_Search.png" />
                </button>
            </div>
        )
    }
}

ImputSearch.propTypes = {
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired
}

export default ImputSearch;
