import React, { Component } from "react";
import "../Product/Product.scss";
import { getProductById, getDetailProductById } from "../../../infra/Calls";
import CurrencyFormat from 'react-currency-format';

export class ProductPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      product: null,
      descriptions: null
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

  handleSearchDescriptionId(id) {
    getDetailProductById(id).then(res => {
      const descriptions = res.data;
      this.setState({ descriptions });
      console.log(descriptions)
    })
      .catch(error => console.log(error))
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.handleSearchById(id);
    this.handleSearchDescriptionId(id)
  }

  render() {
    const { product, descriptions } = this.state;

    return (
      <>
        <div className="product">
          { product &&
            <div className="product_container">
              <div className="product_big-image-container">
                <img  className="product_big-image" src={product.pictures[0].secure_url} />
              </div>
              <div className="product_detail">
                <div className="product_quantity">
                  <span>{product.condition} - </span>
                  <span>{product.initial_quantity - product.available_quantity} solds</span>
                </div>
                <h3 className="product_seller-name">{product.domain_id}</h3>
                <h3 className="product_price">
                  <span>{product.currency_id} </span>
                  <CurrencyFormat 
                    value={product.price}
                    displayType={'text'} 
                    thousandSeparator={true} 
                    renderText={value => <span>{value}</span>} />
                </h3>
                <button className="product_pay-button">Comprar</button>
              </div>
            </div>
          }
          { descriptions && 
            <div className="product_description-container">
              <h2 className="product_description-title">Descripcion del produto</h2>
              <p className="product_description">{descriptions.plain_text}</p>
            </div>
          }
        </div>
      </>
    );
  }
};

export default ProductPage;
