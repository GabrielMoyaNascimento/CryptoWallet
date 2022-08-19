import React from 'react';
import MenuBarLogged from '../../components/navigations/MenuBarLogged';
import Footer from '../../components/navigations/Footer';
import './LayoutDashboard.css';


const Layout = () => {
    return(
      <React.Fragment>
        <MenuBarLogged />
        <Footer/>
      </React.Fragment>
          
    );
}

export default Layout;