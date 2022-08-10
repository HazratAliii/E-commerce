import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import Shopnew from "./pages/shopnew/Shopnew";
import ProductDetails from "./pages/productDetails/ProductDetails";
import UserProfile from "./pages/UserProfile/UserProfile";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Shopnew /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="new" element={<Shopnew />} />
          <Route path="productdetails" element={<ProductDetails />} />
          <Route path="userprofile" element={<UserProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
