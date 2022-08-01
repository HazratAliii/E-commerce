import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home'
import Shopnew from './pages/shopnew/Shopnew';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Shopnew /> */}
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='new' element={<Shopnew />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
