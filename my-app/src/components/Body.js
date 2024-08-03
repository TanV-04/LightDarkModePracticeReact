import React from "react";
import "../App.css";

export default function Body(props) {
  return (
    <div>
      {/* <header className=" text-black text-6xl font-bold py-6 px-4  m-4 mt-20"> */}
      <header className={props.darkMode ? "dark" : ""} >Fun facts about React!</header>

      <div className="px-4">
        <ul className="fact-list ml-6 text-2xl list-disc pl-6 space-y-5">
          <li>was first released in 2013</li>
          <li>was originally created by jordan walke</li>
          <li>has well over 100K stars on GitHub</li>
          <li>is maintained by FaceBook</li>
          <li>powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
    </div>
  );
}
