import React, { Component } from 'react';
import './Header.scss';

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header__logo">
                    <img src="../../assets/images/Logo_ML.png" />
                </div>
                <div className="header__search-imput">
                    
                </div>
            </header>
        )
    }
}