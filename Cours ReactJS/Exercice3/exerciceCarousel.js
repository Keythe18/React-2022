//npm install react-responsive-carousel --save
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

let objStyle = {
    margin:'auto',
    width: '800px'
}
export default class App extends React.Component {
render() {
    return (
      <div style={objStyle}>
        <Carousel>
          <div>
            <img
              src="https://storage.lebonguide.com/crop-615x399/51/91/09420B60-058F-42D5-8DF9-79116F2E8944.png"
              alt="STRASBOURG"
            />
            <p className="legend">STRASBOURG</p>
          </div>
          <div>
            <img
              src="https://storage.lebonguide.com/crop-615x399/70/42/04AEC4D4-D7DF-44E7-A837-1393E9996E94.png"
              alt="ANNECY"
            />
            <p className="legend">ANNECY</p>
          </div>
          <div>
            <img
              src="https://storage.lebonguide.com/crop-615x399/97/64/BC48E71E-1D21-4188-B8AF-FCE81F15D902.png"
              alt="SÈTE"
            />
            <p className="legend">SÈTE</p>
          </div>
          <div>
            <img
              src="https://storage.lebonguide.com/crop-615x399/85/16/2746D5CB-E8AB-4B6F-B537-CEFF4295806C.png"
              alt="CAHORS"
            />
            <p className="legend">CAHORS</p>
          </div>
        </Carousel>
      </div>
    );
}



}