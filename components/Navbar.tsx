import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img
              src="https://platzi-nextjs-delta.vercel.app/logo.png"
              alt="AvoShop"
              width={112}
              height={28}
            />
          </a>
          <div
            className="navbar-burger burger"
            data-target="navbarExampleTransparentExample"
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <Link href="/">
              <a className="navbar-item">Home</a>
            </Link>
            <Link href="/about">
              <a className="navbar-item">About</a>
            </Link>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
