import React, { Component } from "react";
import Modal from "react-modal";

import Logo from "../logo";

import history from "../../history";

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
        <div className="modal-content">
          <Logo />
          <div className="modal-title">¡Gracias!</div>
          <div className="modal-msg">
            <div className="modal-msg-thanks">
              Recibimos tu orden satisfactoriamente. <br /> <br /> Espera a
              nuestro repartidor en tu casa, buen provecho y nuevamente
              ¡Gracias! por la preferencia.
            </div>
            <div className="modal-msg-order">
              Tu numero de orden es: A0000012131
            </div>
          </div>
          <button
            className="modal-btn-home"
            onClick={() => {
              history.push("/");
            }}
          >
            Ir a home
          </button>
        </div>
      </Modal>
    );
  }
}
