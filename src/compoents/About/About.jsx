import "./About.css";
import logo1 from '../../images/about.logo.webp'
import logo2 from '../../images/aboutlogo2.webp'
import logo3 from '../../images/aboutlogo3.webp'
function About() {
  return (
    <>
      <div className="a-main">
        <div className="first common-div">
          <div className="a-first-logo about-logo"><h1>logo</h1></div>
          <div className="a-header-1">
            <h1>We love the plnet</h1>
          </div>
          <div className="a-context-1">
            We make clean skincare with the actives you love - packaged
            sustainably and priced affordably. We're vegan and cruelty-free
            (certified by Leaping Bunny).
          </div>
        </div>
        <div className="second common-div">
        <div><h1>About Facetheory</h1></div>
          <div className="a-second-logo about-logo second-flex"><h1>logo</h1></div>
          <div className="a-header-1">
            <h1>Over 70,000 reviews</h1>
          </div>
          <div className="a-context-1">
            <p>
              We've got over 70,000 real customer reviews so you can buy with
              total confidence.
            </p>
          </div>
        </div>
        <div className="third common-div">
          <div className="a-third-logo about-logo"><h1>logo</h1></div>
          <div className="a-header-1">
            {" "}
            <h1>Tried and true</h1>{" "}
          </div>
          <div className="a-context-1">
            {" "}
            <p>
              We're so confident in our products that if you don't get better
              skin we'll give you your money back. You get 364 days to try them
              out.
            </p>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
