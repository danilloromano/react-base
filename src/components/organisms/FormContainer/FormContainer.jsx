import React, { Component } from "react";
import Input from "../../atoms/Input/Input.jsx";
import "./FormContainer.scss";


class FormContainer extends Component {
  constructor() {
    super();

    this.state = {
        seo_title: "bosta"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
    console.log('sttaaaaaaaate',this.state)
  }

  render() {
    const { seo_title } = this.state;

    return (
        <form id="article-form" className="form_wrapper">
            <Input
            text="SEO title"
            label="seo_title"
            type="text"
            id="seo_title"
            value={seo_title}
            handleChange={this.handleChange}
            />
      </form>
    );
  }
}

export default FormContainer;


