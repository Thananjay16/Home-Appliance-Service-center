import React from "react";
import Footer from "./Footer";
import MyAppBar from "./assign";
const Layout = ({ children }) => {
  return (
    <>
      <MyAppBar/>
      <div>{children}</div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Footer />
    </>
  );
};

export default Layout;