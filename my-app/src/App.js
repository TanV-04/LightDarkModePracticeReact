import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import React from "react";

function App() {
  const [darkMode, setdarkMode] = React.useState(false);
  function toggleDarkMode() {
    setdarkMode((prevState) => !prevState);
  }

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Body darkMode={darkMode} />
    </div>
  );
}

export default App;
