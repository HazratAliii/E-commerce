import React from 'react';
import Topbar from '../../compoents/TopBar/Topbar';
import SecondTopbar from '../../compoents/second-topbar/Second-topbar'
import Footer from '../../compoents/Footer/Footer';
import Navbar from '../../compoents/Navbar/Navbar'
import ShopNew from '../../compoents/Shop-new/ShopNew';
const Shopnew = () => {
    return (
        <div>
            <Topbar />
            <SecondTopbar />
            <Navbar />
            <ShopNew />
            <Footer />
        </div>
    );
}

export default Shopnew;
