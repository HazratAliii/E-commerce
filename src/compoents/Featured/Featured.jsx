import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Featured.css";

const Featured = () => {
  return (
    <>
      <div className="f-container">
        <Row>
          <div className="col-lg-8 col-md-12">
            <Col>
              {/* <h1>sldkfjsldkfj</h1>
            <h1>sldkfjsldkfj</h1>
            <h1>sldkfjsldkfj</h1>
            <h1>sldkfjsldkfj</h1>
            <h1>sldkfjsldkfj</h1>
            <h1>sldkfjsldkfj</h1>
            <h1>sldkfjsldkfj</h1> */}
              <div className="img-sec"></div>
            </Col>
          </div>
          <div className="col-lg-4 col-md-12">
            <Col>
              <div
                style={{
                  width: "80%",
                  height: "70%",
                  margin: "0 auto",
                  marginTop: "30%",
                }}
              >
                <h1 style={{ fontWeight: "bolder", fontSize: "80px" }}>
                  The ultimate in hyaluronic acid
                </h1>
                <p>
                  Hylafecta S14 is our new 2% triple molecule weight hyaluronic
                  serum
                </p>
                <Link to="/new">
                  <button className="f-btn">Shop New In</button>
                </Link>
              </div>
            </Col>
          </div>
        </Row>
      </div>
    </>
  );
};

export default Featured;
