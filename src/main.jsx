import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AddProductContextProvider } from "./Contexts/AddProductContext.jsx";
import { AllCustomersContextProvider } from "./Contexts/AllCustomersContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AddProductContextProvider>
        <AllCustomersContextProvider>
          <App />
        </AllCustomersContextProvider>
      </AddProductContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
