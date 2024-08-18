import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Layout = () => {
    const [isDrawerOpen,setIsDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setIsDrawerOpen((prevValue) => !prevValue);
    };
  return (
    <>
        <Header openSidebar={toggleDrawer}/>
        <Sidebar closeSidebar={toggleDrawer} isOpen={isDrawerOpen}/>
        <Outlet />
    </>
  );
};

export default Layout;