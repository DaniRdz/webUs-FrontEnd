import React, { Component } from "react";

export class FormInput extends Component {
  render() {
    const { type, placeholder, input } = this.props;
    return (
      <div className="form-input">
        <input
          className="input"
          type={type}
          placeholder={placeholder}
          {...input}
        ></input>
      </div>
    );
  }
}

export class FormButton extends Component {
  render() {
    const { type, title, onClick, input } = this.props;
    return (
      <div className="form-btn">
        <button className="btn" type={type} onClick={onClick} {...input}>
          {title}
        </button>
      </div>
    );
  }
}
