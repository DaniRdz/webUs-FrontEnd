import React, { Component } from "react";
import Modal from "react-modal";

export default class ThanksModal extends Component {
  render() {
    return (
      <Modal isOpen={this.props.showModal}>
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
