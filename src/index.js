import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";

function render() {
  let currentCategory = "bumpers";
  
  const changeCategory = (newCategory) => {
    console.log("clicked" + " " + newCategory)
    let currentCategory = newCategory;
    ReactDOM.render(
      <App state={state} changeCategory={changeCategory} currentCategory={currentCategory} />,
      document.getElementById("root")
    );
  }

  ReactDOM.render(
    <App state={state} changeCategory={changeCategory} currentCategory={currentCategory} />,
    document.getElementById("root")
  );
}
render();

