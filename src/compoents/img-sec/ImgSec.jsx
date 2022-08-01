import "./ImgSec.css";
import pexels1 from "../../images/pexels1.jpg";
import pexels2 from "../../images/pexels2.jpg";
import pexels3 from "../../images/pexels3.jpg";
import pexels4 from "../../images/pexels4.jpg";
import pexels5 from "../../images/pexels5.jpg";
import pexels6 from "../../images/pexels6.jpg";
import pexels7 from "../../images/pexels7.jpg";
import pexels8 from "../../images/pexels8.jpg";
import { Col, Row } from "react-bootstrap";

const ImgSec = () => {
  return (
    <>
      <div className="imgSec-wrapper">
        <Row>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <Col>
              <div className="common-img">
                <img className="img-sec-img" src={pexels4} alt="" />
              </div>
            </Col>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <Col>
              <div className="common-img">
                <img className="img-sec-img" src={pexels2} alt="" />
              </div>
            </Col>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <Col>
              <div className="common-img">
                <img className="img-sec-img" src={pexels3} alt="" />
              </div>
            </Col>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <Col>
              <div className="common-img">
                <img className="img-sec-img" src={pexels4} alt="" />
              </div>
            </Col>
          </div>
        </Row>
        <br />
        <Row>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <Col>
              <div className="common-img">
                <img className="img-sec-img" src={pexels5} alt="" />
              </div>
            </Col>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <Col>
              <div className="common-img">
                <img className="img-sec-img" src={pexels6} alt="" />
              </div>
            </Col>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <Col>
              <div className="img1 common-img">
                <img className="img-sec-img" src={pexels7} alt="" />
              </div>
            </Col>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <Col>
              <div className="img1 common-img">
                <img className="img-sec-img" src={pexels8} alt="" />
              </div>
            </Col>
          </div>
        </Row>
      </div>
    </>
  );
};

export default ImgSec;
