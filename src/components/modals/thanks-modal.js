import React, { Component } from "react";
import Modal from "react-modal";

Modal.setAppElement(".app-wrapper");

export default class ThanksModal extends Component {
  constructor() {
    super();
    this.customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "1000px",
        height: "450px",
        backgroundColor: "#fffbf3",
        border: "solid 3px #8c6100",
      },
      overlay: {
        backgroundColor: "rgb(255, 251, 243, 0.75)",
      },
    };
  }
  render() {
    return (
      <Modal
        onRequestClose={() => this.props.handleCloseModal()}
        isOpen={this.props.showModal}
        style={this.customStyles}
      >
        <a
          onClick={() => {
            this.props.handleCloseModal();
          }}
        >
          Hello here goes thaks modal
        </a>
      </Modal>
    );
  }
}
