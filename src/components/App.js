import React, { Component } from "react";
import Home from "../components/pages/Home/Home.jsx"

import "./App.scss";
import "../assets/variables/reset.scss"

 class App extends Component {

    render() {
        return (
            <div>
                <Home />
            </div>
        )
    }
}

export default App;