import './Carousel.css'
import { display } from "@mui/system";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import productImg from  "../../images/slider.webp"

function Carouseltemp(props) {
  const { title } = props;
  return (
    <div className="car-conts">
      <div className="car-cont">
        <Card style={{ width: "18rem", display: "flex", flexDirection: "row" }}>
          <Card.Img className="c-img" variant="top" src={productImg} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Carouseltemp;

// import React from 'react'
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// function Carouseltemp() {
//  return (
//             <Carousel>
//                 <div>
//                     {/* <img src="assets/1.jpeg" /> */}
//                     <p className="legend">Legend 1</p>
//                 </div>
//                 <div>
//                     <img src="assets/2.jpeg" />
//                     <p className="legend">Legend 2</p>
//                 </div>
//                 <div>
//                     <img src="assets/3.jpeg" />
//                     <p className="legend">Legend 3</p>
//                 </div>
//             </Carousel>
//         );
// }

// export default Carouseltemp