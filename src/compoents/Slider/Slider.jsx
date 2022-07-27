import "./Slider.css";

import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import CarouselItem from "../CarouselTemp/Carouseltem";

function UncontrolledExample() {
  const [carItem, setcarItem] = useState([
    { id: 1, title: "item #1" },
    { id: 2, title: "item #2" },
    { id: 3, title: "item #3" },
    { id: 4, title: "item #4" },
    { id: 5, title: "item #5" },
    { id: 6, title: "item #5" },
    { id: 7, title: "item #5" },
    { id: 8, title: "item #5" },
    { id: 9, title: "item #5" },
    { id: 10, title: "item #5" },
    { id: 12, title: "item #5" },
    { id: 13, title: "item #5" },
    { id: 14, title: "item #5" },
    { id: 15, title: "item #5" },
    { id: 16, title: "item #5" },
    { id: 17, title: "item #5" },
    { id: 18, title: "item #5" },
    { id: 19, title: "item #5" },
    { id: 20, title: "item #5" },
    { id: 21, title: "item #5" },
    { id: 22, title: "item #5" }
  ]);

  return (
    <>
      <Carousel>
      <div className="card-comp">
        {carItem.map((item) => (
          <div className="cards">
            <CarouselItem key={item.id} id={item.id} title={item.title} />
          </div>
        ))}
            {/* <CarouselItem /> */}
        
      </div>
      </Carousel>
    </>
  );
}

export default UncontrolledExample;
