// import React from "react";
import PropTypes from 'prop-types';
import "./Navbar.css";

const NavRoute = (props) => {
  return (
    <button className="nav-content">
      <img src={`./images/icons/${props.url}.png`} alt={`${props.text} icon`} />
      <p>{props.text}</p>
    </button>
  );
};

NavRoute.propTypes = {
  url: PropTypes.string.isRequired,
  iconurl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

const Navbar = () => {
  return (
    <div className="nav-container">

      <div className="logo-container justify-center">
        <div className="logo-content">
          <img src="./images/icons/ipl.png" alt="Batsman Icon" />
          <p>IPL Auction 2024</p>
        </div>
      </div>

      <div className="route-container justify-between">
        <NavRoute url="dashboard" text="Dashboard" />
        <NavRoute url="search" text="Search" />
        <NavRoute url="leaderboard" text="Leaderboard" />
        <NavRoute url="calculator" text="Calculator" />
        <NavRoute url="spectate" text="Spectate" />
        <NavRoute url="logout" text="Logout" />
      </div>

    </div>
  );
};

export default Navbar;

