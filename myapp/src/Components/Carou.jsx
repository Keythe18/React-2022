import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img5.jpg";

let objStyle = {
  margin: "auto",
  width: "800px",
};
export default class App extends React.Component {
  render() {
    return (
      <div style={objStyle}>
        <Carousel>
          <div>
            <img src={img1} alt="" />
            <p className="legend"></p>
          </div>
          <div>
            <img src={img2} alt="" />
            <p className="legend"></p>
          </div>
          <div>
            <img src={img3} alt="" />
            <p className="legend"></p>
          </div>
          <div>
            <img src={img4} alt="" />
            <p className="legend"></p>
          </div>
          <div>
            <img src={img5} alt="" />
            <p className="legend"></p>
          </div>
        </Carousel>
      </div>
    );
  }
}
