import React from "react";

import Logo from "../logo";

import wallpaper from "../../../static/assets/images/wallpapers/papas-about-us.jpg";

export default function () {
  return (
    <div className="about-us-container">
      <div
        className="about-us-img"
        style={{
          backgroundImage: "url(" + wallpaper + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div className="about-us-info">
        <Logo />
        <div className="about-us-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            bibendum pharetra eros, id dictum justo tempor sed. Mauris accumsan
            purus sem, ut vestibulum ante efficitur ac. Ut vestibulum interdum
            massa et pretium. Aenean risus mi, sodales in molestie a, pretium
            non nisl. Aliquam posuere porta turpis quis pulvinar.
          </p>

          <p>
            <br />
            Nulla mi tortor, mollis eu blandit sed, pretium eget risus. Fusce
            varius elit vel metus interdum ullamcorper. Morbi lobortis erat sem,
            quis accumsan ipsum c ondimentum a.
          </p>

          <p>
            <br />
            Nam vel leo sed mauris vehicula tincidunt ut eu lorem. Nam vitae
            massa vitae sem blandit vehicula. Nam sagittis quis enim sed
            malesuada. Cras bibendum finibus ligula non consequat. Aliquam erat
            volutpat. Curabitur facilisis, augue eget congue lacinia, dui metus
            malesuada justo, nec ullamcorper dui est ac arcu. Aliquam a viverra
            nisi. Vivamus ut diam vel metus feugiat tincidunt a a felis.
          </p>
        </div>
      </div>
    </div>
  );
}
