import React, { Component } from 'react';
import ImputSearch from '../../molecules/ImputSearch/ImputSearch.jsx'
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header__wrapper">
                    <div className="header__logo">
                        <img src="../src/assets/images/Logo_ML.png" />
                    </div>
                    <div className="header__imput">
                        <ImputSearch type='text' placeholder='Nunca deixe de buscar'/>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;