import React, { Component } from "react";

import Contact from "./contact-page/contact";

import backgroudPicture from "../../static/assets/images/backgrounds/salchipapa.png";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="welcome-page">
          <div
            className="backgroud-img"
            style={{
              background: "url(" + backgroudPicture + ") no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="backgroud-color" />
          <div className="welcome-container">
            <div className="welcome-msg">
              "Neque porro quisquam est qui <br /> <br />
              dolorem ipsum quia dolor sit amet, <br /> <br />
              consectetur, adipisci velit..."
            </div>
            <div className="btn-container">
              <p className="grettings-msg">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
              </p>
              <button
                className="order-button"
                onClick={() => this.props.history.push("/menu")}
              >
                ¡Ordenar Ahora!
              </button>
            </div>
          </div>
        </div>
        <Contact />
      </div>
    );
  }
}

export default Home;
