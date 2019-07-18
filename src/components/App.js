import React, { Component, Fragment } from "react";
import Header from "./organisms/Header/Header.jsx"
import "./App.scss";
import "../assets/variables/reset.scss";

export default class App extends Component {

    render() {
        return (
            <Fragment>
                <Header />
                <div className="container">

                </div>
            </Fragment>
        )
    }
}