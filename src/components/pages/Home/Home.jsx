import React, { Component, Fragment } from "react";
import Header from "../../organisms/Header/Header.jsx";
import PropTypes from "prop-types";
import ProductBox from '../../molecules/ProductBox/ProductBox.jsx'
import "../Home/Home.scss";

class Home extends Component {
    constructor(props) {
        super(props);
        console.log('proppppssss home', props);
    }

    handleList() {

        let boxes =  this.props.products && this.props.products.map( item => {
            const {id, title, price, thumbnail, address:{state_name}} = item;

            return (
                    <ProductBox  key={id}
                        id={id}
                        description={title}
                        price={price} 
                        image={thumbnail} 
                        location={state_name} />
            )
        })
        return boxes;
    }

    render() {
        return (
            <Fragment>
                <Header
                    handleSearch={this.props.handleSearch}
                    handleChange={this.props.handleChange} />
                    <div className="container">
                        {this.handleList()}
                    </div>
            </Fragment>
        )
    }
}

Home.propTypes = {
    products: PropTypes.array.isRequired,
    searchText: PropTypes.string.isRequired,
    handleInitialSearch: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
}

export default Home;

