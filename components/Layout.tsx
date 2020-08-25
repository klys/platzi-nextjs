import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
