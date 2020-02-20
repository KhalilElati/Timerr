import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card"

import "./index.css"

function App() {
  return (
    <Card/>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App
