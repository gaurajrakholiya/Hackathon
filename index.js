import React from "react";
import ReactDOM from "react-dom";
import { HomePage } from "./App"; // Import your main component

ReactDOM.render(
  <React.StrictMode>
    <HomePage /> {/* Render the HomePage component */}
  </React.StrictMode>,
  document.getElementById("root") // Replace "root" with the ID of your root HTML element
);
