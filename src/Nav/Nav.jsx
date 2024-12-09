import React from "react";
import navCSS from "./../Nav/Nav.module.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className={navCSS.Nav_wrapper}>
      <div className={navCSS.logo}>
        <a href="#">Wanderer</a>
      </div>
      <ul>
        <li>
          {" "}
          <Link to={"/"}>Home</Link>{" "}
        </li>
        <li>
          <Link to={"/destination"}>Destination</Link>
        </li>
        <Link to={"/hero"}>
          <li>Trips</li>
        </Link>
        <Link to={"/about"}>
          <li>About</li>
        </Link>
        <Link to={"/trips"}>
          <li>Packages</li>
        </Link>
      </ul>
      <div className={navCSS.nav_btns}>
        <div className={navCSS.search_wrapper}>
          <i className="ri-search-line"></i>
          <input type="text" placeholder="Search Places" />
        </div>
      </div>

      <i className="ri-user-fill" id={navCSS.bars}></i>
    </div>
  );
}

export default Nav;
