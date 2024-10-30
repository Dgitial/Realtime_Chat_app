import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Ensure this file exists and is styled as needed
import App from "./App.jsx"; // Import your main App component

// Define the root component
const Home = () => {
  return (
    <div className="container">
      <App />
    </div>
  );
};

// Select the root DOM element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the Home component
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
