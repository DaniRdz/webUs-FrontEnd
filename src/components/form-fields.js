import React, { Component } from "react";

export class FormInput extends Component {
  render() {
    const { className, type, placeholder, input } = this.props;
    return (
      <div className={`form-input ${className}`}>
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
    const { className, type, title, onClick, input, back } = this.props;
    return (
      <div className={`form-btn ${className}`}>
        <button
          className={`btn ${back ? "back" : ""}`}
          type={type}
          onClick={onClick}
          {...input}
        >
          {title}
        </button>
      </div>
    );
  }
}
