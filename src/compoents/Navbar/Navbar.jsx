import { Search } from "@mui/icons-material";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbarCont">
        <div className="leftNav">
          <div className="logo">Facethoery</div>
          <div>BUILD ROUTINE</div>
          <div>SHOP</div>
          <div>SKIN CARE ROUTINES</div>
          <div>INGREDIENTS</div>
          <div>ABOUT</div>
          <div>REWARDS</div>
        </div>
        <div className="rightNav">
          <div className="search">
            <div className="s">
              <input type="text" placeholder="     Search" />
            <div className="si">
              <Search className="s-icon"/>
            </div>
            </div>
          </div>
          <div className="login">LOGIN</div>
          <div className="cart">cart</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
