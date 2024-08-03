import React from "react";
import logo from "../images/logo.png";
import sun from "../images/sun.svg";
import moon from "../images/moon.svg";
import "../App.css";

export default function Navbar(props) {
  return (
    // <nav className="bg-white p-4 shadow-md">
    <nav className={`navbar ${props.darkMode ? "dark" : ""}`}> 
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4 ml-4">
          <img src={logo} alt="logo" className="h-20 w-auto" />
          <h1 className="text-2xl font-semibold">React facts</h1>
        </div>

        <div className="flex  space-x-4">
          <input type="checkbox" id="darkModeToggle"  readOnly checked={props.darkMode}  />
          <label
            htmlFor="darkModeToggle"
            className="flex items-center relative"
            onClick={props.toggleDarkMode}
          >
            <img src={sun} alt="icon" className="sun" />
            <img src={moon} alt="icon" className="moon absolute right-0" />
          </label>
        </div>
        <div className="background"></div>
      </div>
    </nav>
  );
}
