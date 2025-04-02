import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProfileProvider } from "./context/ProfileContext";
import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"; 



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProfileProvider>
    <App />
  </ProfileProvider>
);

