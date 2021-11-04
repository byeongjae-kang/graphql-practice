import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Fragment>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            Songs
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/">Songs</Link>
            </li>
            <li>
              <Link to="songs/new">New Song</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Layout;
