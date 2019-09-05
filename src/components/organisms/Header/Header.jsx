import React, { Component } from 'react';
import PropTypes from "prop-types";
import ImputSearch from '../../molecules/ImputSearch/ImputSearch.jsx'
import './Header.scss';

class Header extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const { handleChange, handleSearch } = this.props;
        return (
            <header className="header">
                <div className="header__wrapper">
                    <div className="header__logo">
                        <img src="../src/assets/images/Logo_ML.png" />
                    </div>
                    <div className="header__imput">
                        <ImputSearch
                            type='text'
                            placeholder='Nunca deixe de buscar'
                            handleChange={handleChange}
                            handleSearch={handleSearch} />
                    </div>
                </div>
            </header>
        )
    }
}

Header.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired
}

export default Header;