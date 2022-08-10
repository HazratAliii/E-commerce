import { Col, Row } from "react-bootstrap";
import "./userProfile.css";
import user from "../../images/user.webp";
import Topbar from "../../compoents/TopBar/Topbar";
import SecondTopbar from "../../compoents/second-topbar/Second-topbar";
import Navbar from "../../compoents/Navbar/Navbar";
const UserProfile = () => {
  return (
    <>
      <Topbar />
      <SecondTopbar />
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "50%",
          margin: "0 auto",
          marginTop: "10%",
        }}
      >
        <div className="">
          <h1>Welcome back John</h1>
        </div>
        <div style={{ cursor: "pointer", fontWeight: "bold" }}> Logout </div>
      </div>

      <div
        className="profile-wrapper"
        style={{
          backgroundColor: "pink",

          width: "50%",
          margin: "0 auto",
        }}
      >
        <Row>
          <div className="col-lg-4 col-md-12">
            <Col>
              <div
                style={{
                  height: "200px",
                  width: "200px",
                  marginLeft: "30%",
                }}
              >
                <img
                  src={user}
                  alt=""
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
              </div>
            </Col>
          </div>
          <div className="col-lg-4 col-md-12">
            <Col>
              <div
                style={{
                  textAlign: "center",
                  marginTop: "10%",
                  fontWeight: "bold",
                }}
              >
                <h4>Name: John Doe</h4>
                <h6> Email: jogn.doe@gmail.com</h6>
                <h6>Phone: +8823090923 </h6>
                <h6>Address: Kuril, Dhaka</h6>
              </div>
            </Col>
          </div>
          <div className="col-lg-4 col-md-12">
            <Col>
              <div
                style={{
                  textAlign: "left",
                  marginTop: "10%",
                }}
              >
                {" "}
                <div style={{ backgroundColor: "pink", marginTop: "20%" }}>
                  <button style={{ width: "80%", padding: "10px" }}>
                    View your points here
                  </button>
                </div>
              </div>
            </Col>
          </div>
        </Row>
      </div>
    </>
  );
};

export default UserProfile;
