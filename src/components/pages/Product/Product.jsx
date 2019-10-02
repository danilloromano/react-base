import React, { Component } from "react";
import "../Product/Product.scss";
import { getProductById } from "../../../infra/Calls";

export class ProductPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      product: null
    }
  }

  handleSearchById(id) {
    getProductById(id)
        .then(res => {
            const product = res.data;
            this.setState({ product });
        })
        .catch(error => console.log(error))
  }

  componentDidMount () {
    const { id } = this.props.match.params;
    this.handleSearchById(id);
  }

  render() {
    const { id } = this.props.match.params;

    return (
      <>
        <p>
          <strong>Match Props: {id} </strong>
        </p>
      </>
    );
  }
};

export default ProductPage;
