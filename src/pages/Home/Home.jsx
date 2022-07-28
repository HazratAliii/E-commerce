import Topbar from "../../compoents/TopBar/Topbar";
import SecondTopbar from "../../compoents/second-topbar/Second-topbar";
import Navbar from "../../compoents/Navbar/Navbar";
import Featured from "../../compoents/Featured/Featured";
import Sponsor from "../../compoents/Sponsor/Sponsor";
import Concern from "../../compoents/Concern/Concern";
import Whatsnew from '../../compoents/WhatsNew/Whatsnew'
import BodyShop from "../../compoents/BodyShop/bodyShop";
import About from "../../compoents/About/About";
import Facetheory from "../../compoents/Facetheory/Facetheory";
import Footer from "../../compoents/Footer/Footer";
import ImgSec from "../../compoents/img-sec/ImgSec";
import Follow from "../../compoents/Follow/Follow";
import Community from "../../compoents/Community/Community";

const Home = () => {
  return (
    <div>
      <Topbar />
      <SecondTopbar />
      <Navbar />
      <Featured />
      <Sponsor />
      <Concern />
      <Whatsnew />
      <BodyShop />
      <About />
      <Facetheory />
      <ImgSec />
      <Follow />
      <Community />
      <Footer />
    </div>
  );
};

export default Home;
