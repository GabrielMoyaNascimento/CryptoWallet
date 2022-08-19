import React from 'react'
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import './LayoutCarteira.css'

const Layout = () => {
    return(
        
<ProSidebar>
  <SidebarHeader>
    {
        
    }
  </SidebarHeader>
  <SidebarContent>
    {/**
     *  You can add the content of the sidebar ex: menu, profile details, ...
     */}
  </SidebarContent>
  <SidebarFooter>
    {/**
     *  You can add a footer for the sidebar ex: copyright
     */}
  </SidebarFooter>
</ProSidebar>
    );
}

export default Layout;