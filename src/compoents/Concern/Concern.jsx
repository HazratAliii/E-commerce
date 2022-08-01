import { Col, Row } from "react-bootstrap";

import "./Concern.css";
const Concern = () => {
  return (
    <div>
      <div className="c-container">
        <div>
          <h1>Shop by concern</h1>
        </div> 
        <Row>
          <div className="col-lg-3 col-md-6">
            <Col>
              <button className="concern-btn">ANTI-AGING</button>
            </Col>
          </div>
          <div className="col-lg-3 col-md-6">
            <Col>
              <button className="concern-btn">BLACKHEADS</button>
            </Col>
          </div>
          <div className="col-lg-3 col-md-6">
            <Col>
              <button className="concern-btn">OILCONTROL</button>
            </Col>

          </div>
          <div className="col-lg-3 col-md-6">
            <Col>
              <button className="concern-btn">DULLNESS</button>
            </Col>
          </div>
        </Row>
        <Row>
          <div className="col-lg-3 col-md-6">
            <Col>
              <button className="concern-btn">PIGMENTATION</button>
            </Col>
          </div>
          <div className="col-lg-3 col-md-6">
            <Col>
              <button className="concern-btn">DEHYDRATION</button>
            </Col>
          </div>
          <div className="col-lg-3 col-md-6">
            <Col>
              <button className="concern-btn">ANTI REDNESS</button>
            </Col>

          </div>
          <div className="col-lg-3 col-md-6">
            <Col>
              <button className="concern-btn">UNEVEN TONE</button>
            </Col>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default Concern;
