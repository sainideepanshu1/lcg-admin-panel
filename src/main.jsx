import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SidebarContextProvider } from "./Contexts/SidebarContext.jsx";
import { ProductsContextProvider } from "./Contexts/ProductsContext.jsx";
import { AddProductContextProvider } from "./Contexts/AddProductContext.jsx";
import { AllCustomersContextProvider } from "./Contexts/AllCustomersContext.jsx";
import { EditProductContextProvider } from "./Contexts/EditProductContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SidebarContextProvider>
        <ProductsContextProvider>
          <AddProductContextProvider>
            <AllCustomersContextProvider>
              <EditProductContextProvider>
                <App />
              </EditProductContextProvider>
            </AllCustomersContextProvider>
          </AddProductContextProvider>
        </ProductsContextProvider>
      </SidebarContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
