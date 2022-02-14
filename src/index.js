import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function DisplayAllMusic() {
  return <App />;
  
}

const rootElement = document.getElementById("root");
ReactDOM.render(<DisplayAllMusic />, rootElement);
