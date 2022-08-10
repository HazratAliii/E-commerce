import "./productDetails.css";
import Topbar from "../../compoents/TopBar/Topbar";
import SecondTopbar from "../../compoents/second-topbar/Second-topbar";
import Navbar from "../../compoents/Navbar/Navbar";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import prod1 from "../../images/prod1.webp";
import prod2 from "../../images/prod2.webp";
import prod3 from "../../images/prod3.webp";
import prod4 from "../../images/prod4.webp";
import prod5 from "../../images/prod5.webp";
import prod6 from "../../images/prod6.webp";
import GradeIcon from "@mui/icons-material/Grade";
import { Grade } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { fontWeight } from "@mui/system";
const ProductDetails = () => {
  const [bigImg, setBigImg] = useState(prod1);
  const f = "pink";
  const handleImg1 = () => {
    setBigImg(prod1);
  };
  const handleImg2 = () => {
    setBigImg(prod2);
  };
  const handleImg3 = () => {
    setBigImg(prod3);
  };
  const handleImg4 = () => {
    setBigImg(prod4);
  };
  const handleImg5 = () => {
    setBigImg(prod5);
  };
  const handleImg6 = () => {
    setBigImg(prod6);
  };
  return (
    <>
      <Topbar />
      <SecondTopbar />
      <Navbar />
      <div className="prod-details-wrapper">
        <Row>
          <div className="col-lg-6">
            <Col>
              <div className="side-img-wrapper">
                <div className="partial-img-sec">
                  <div className="partial-img" onClick={handleImg1}>
                    <img
                      src={prod1}
                      alt=""
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                  <div className="partial-img" onClick={handleImg2}>
                    <img
                      src={prod2}
                      alt=""
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                  <div className="partial-img" onClick={handleImg3}>
                    <img
                      src={prod3}
                      alt=""
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                  <div className="partial-img" onClick={handleImg4}>
                    <img
                      src={prod4}
                      alt=""
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                  <div className="partial-img" onClick={handleImg5}>
                    <img
                      src={prod5}
                      alt=""
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                  <div className="partial-img" onClick={handleImg6}>
                    <img
                      src={prod6}
                      alt=""
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                </div>
                <div className="big-img-sec">
                  <img
                    src={bigImg}
                    alt=""
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    onClick={handleImg1}
                  />
                </div>
              </div>
            </Col>
          </div>
          <div className="col-lg-6">
            <Col>
              <div className="prod-text-sec">
                <h3 style={{ fontWeight: "bolder", marginTop: "20px" }}>
                  Clarifying Cleanser C2
                </h3>
                <p>with Glycolic Acid, Salicylic Acid and Lactic Acid</p>
                <div
                  className="prod-rating-dvi"
                  style={{
                    display: "flex",
                    columnDirection: "row",
                    aignItem: "center",
                  }}
                >
                  <div>
                    <Grade />
                    <Grade />
                    <Grade />
                    <Grade />
                    <Grade />
                  </div>
                  <div style={{ display: "inline" }}>
                    <p>(2026 reviews)</p>
                  </div>
                </div>
                <div style={{ border: "1px dotted black" }}></div>
                <div className="prod-price">
                  <h5>£14.99 - 30ml (£0.50 per ml)</h5>
                </div>
                <div className="prod-info">
                  <p style={{ marginLeft: "15px" }}>
                    or make 3 interest-free payments of{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        margin: "0",
                        padding: "0",
                      }}
                    >
                      £3.75 GBP
                    </span>{" "}
                    fortnightly with
                  </p>
                  <h3 style={{ display: "inline", marginLeft: "15px" }}>
                    Clearpay
                  </h3>{" "}
                  <span>
                    <Link to="#">more info</Link>
                  </span>
                </div>
                <div
                  className="prod-div-cont"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "20px",
                  }}
                >
                  <div
                    style={{
                      border: "1px solid black",
                      padding: "10px",
                      marginRight: "10px",
                      cursor: "pointer",
                    }}
                  >
                    {" "}
                    30ml{" "}
                  </div>
                  <div
                    style={{
                      border: "1px solid black",
                      padding: "10px",
                      marginRight: "10px",
                      cursor: "pointer",
                    }}
                  >
                    Save - 30ml (x2)
                  </div>
                  <div
                    style={{
                      border: "1px solid black",
                      padding: "10px",
                      marginRight: "10px",
                      cursor: "pointer",
                    }}
                  >
                    Save - 30ml (x3)
                  </div>
                </div>
                <div className="prod-radio" style={{ marginTop: "20px" }}>
                  <input
                    type="radio"
                    name="rb"
                    
                    style={{ marginRight: "5px", fontSize: "20px" }}
                  />
                  <span style={{ fontWeight: "bolder" }}>
                    One-time purchase
                  </span>
                  <br />
                  <input
                    type="radio"
                    name="rb"
                    style={{ marginRight: "5px", fontSize: "20px" }}
                  />
                  <span style={{ fontWeight: "bolder" }}>
                    Subscribe and save 15%
                  </span>
                </div>
                <button
                  style={{
                    width: "70%",
                    padding: "20px",
                    marginTop: "20px",
                    backgroundColor: "#7DCFB6",
                    border: "none",
                  }}
                >
                  <h3>Add to Bag - £12.99</h3>
                </button>
                <div>
                  <p style={{ fontWeight: "bolder", marginTop: "20px" }}>
                    Fastest Delivery: Thu, Aug 11. Free UK shipping and{" "}
                    <Link to="#" style={{ color: "black" }}>
                      free returns
                    </Link>
                    .
                  </p>{" "}
                </div>
                <div
                  className="tags"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <div
                    style={{
                      padding: "5px",
                      marginRight: "10px",
                      backgroundColor: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    ANTI-AGEING
                  </div>
                  <div
                    style={{
                      padding: "5px",
                      marginRight: "10px",
                      backgroundColor: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    BLACKHEADS
                  </div>
                  <div
                    style={{
                      padding: "5px",
                      marginRight: "10px",
                      backgroundColor: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    COMBINATION
                  </div>
                  <div
                    style={{
                      padding: "5px",
                      marginRight: "10px",
                      backgroundColor: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    DULL
                  </div>
                  <div
                    style={{
                      padding: "5px",
                      marginRight: "10px",
                      backgroundColor: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    NORMAL
                  </div>
                  <div
                    style={{
                      padding: "5px",
                      marginRight: "10px",
                      backgroundColor: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    OIL CONTROL
                  </div>
                  <div
                    style={{
                      padding: "5px",
                      marginRight: "10px",
                      backgroundColor: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    PIGMENTATION
                  </div>
                </div>
                <div
                  className="lists"
                  style={{ widt: "70%", marginTop: "20px", fontWeight: "bold" }}
                >
                  <ul>
                    <li style={{ marginBottom: "10px" }}>
                      Our bestselling clarifying cream cleanser contains a
                      powerful trifecta of acids at a low pH to benefit oily,
                      congested, and blemish-prone skin.
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Contains 2% salicylic acid, to penetrate deeply into the
                      pores to remove trapped dirt and reduce the appearance of
                      blackheads.
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Formulated with glycolic acid (4%) and lactic acid (1%) to
                      exfoliate skin, removing dead skin cells and improving the
                      overall texture and appearance.
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Salicylic acid (2%) penetrates deep into the pores.
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Free of parabens, silicones, PEGs, SLS, SLES, and mineral
                      oils. Vegan and cruelty-free. Made in the UK.
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Facetheory products contain a high concentration of
                      actives, so only a small amount is required per use. 180ml
                      usually lasts our customers around two months.
                    </li>
                    <li style={{ marginBottom: "30px" }}>
                      Do not use if under the age of 18 or if pregnant. Seek
                      advice from your doctor.
                    </li>
                  </ul>
                  <p style={{ marginBottom: "30px" }}>
                    Our Clarifying Cleanser C2 is specially formulated for oily
                    and congested skin, and doubles as a glycolic face peel. A
                    powerful triple blend of alpha and beta hydroxy acids
                    purifies pores and minimises redness, while gently
                    resurfacing your skin.
                  </p>
                  <p style={{ marginBottom: "30px" }}>
                    2% Salicylic acid allows the product to penetrate pores,
                    removing trapped dirt, excess oil and helping to treat
                    blemishes such as blackheads and whiteheads. This clarifying
                    cleanser is gentle enough to protect your skin’s natural
                    protective barrier, but thorough enough to strip your skin
                    of impurities, leaving you with a fantastic, fresh feeling.
                  </p>
                  <p style={{ marginBottom: "30px" }}>
                    Available as a scented or unscented clarifying cleanser. The
                    scented option contains cold-pressed mandarin essential oil.
                  </p>
                </div>
                <div className="freq-bought">
                  <h1 style={{ textAlign: "center" }}>
                    Frequently Bought Together
                  </h1>
                </div>
                <div
                  className="freq-bought-img"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      height: "150px",
                      width: "150px",
                      objectFit: "cover",
                    }}
                  >
                    <img
                      src={prod1}
                      alt=""
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                  <div style={{ padding: "20px" }}>
                    <h2>+</h2>
                  </div>
                  <div>
                    <div
                      style={{
                        height: "150px",
                        width: "150px",
                        objectFit: "cover",
                      }}
                    >
                      <img
                        src={prod1}
                        alt=""
                        style={{ height: "100%", width: "100%" }}
                      />
                    </div>
                  </div>
                  <div style={{ padding: "20px" }}>
                    <h2>+</h2>
                  </div>
                  <div>
                    <div
                      style={{
                        height: "150px",
                        width: "150px",
                        objectFit: "cover",
                      }}
                    >
                      <img
                        src={prod1}
                        alt=""
                        style={{ height: "100%", width: "100%" }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="total-price"
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    marginTop: "20px",
                  }}
                >
                  <p style={{ textAlign: "center" }}>
                    Total Price:{" "}
                    <span style={{ backgroundColor: "red" }}> £35.67</span>{" "}
                    <s> £41.97</s>
                  </p>
                </div>
                <div style={{ textAlign: "center", padding: "10px" }}>
                  <button
                    style={{
                      width: "80%",
                      background: "black",
                      color: "white",
                      padding: "15px",
                    }}
                  >
                    <h3>Add to BAG</h3>
                  </button>
                </div>
                {/* product details last tag */}
              </div>
            </Col>
          </div>
        </Row>
      </div>
    </>
  );
};

export default ProductDetails;
