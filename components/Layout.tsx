import React from "react";
import Navbar from "./navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      {children}
      <footer>This is the footer @ 2020</footer>
    </div>
  );
};

export default Layout;
