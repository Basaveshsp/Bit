import React from "react";

import HomePage from './Components/HomePage';

const App = () => {
  return (
    <div>
      <HomePage />
    </div>
  );
  alert("hi");

  document.getElementsByClassName("nav-bar-icon")[0].addEventListener("click", () => {
    document.getElementsByClassName("nav-bar-icon")[0].innerHTML = "X";
    document.getElementsByClassName("navbar-in-list")[0].style["display"] = "flex";
  })
};

export default App;