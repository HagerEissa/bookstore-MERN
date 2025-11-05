import React from 'react';
import NavBar from '../components/navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/footer';

const Layout = () => {
      const location = useLocation()
        const hideNavBar = /^\/admin(\/|$)/.test(location.pathname)  
    return (
        <>
        {!hideNavBar && <NavBar></NavBar>}
        <div style={{ minHeight: "80vh", padding: "20px" }}>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </>

    );
}

export default Layout;

