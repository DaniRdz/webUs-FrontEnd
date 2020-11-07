import React, { Component } from "react";

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
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit..."
            </div>
            <button className="order-button">Order</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
