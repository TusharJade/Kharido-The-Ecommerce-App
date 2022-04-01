import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { CategoryContextProvider } from "./context/category-context";
import { ProductContextProvider } from "./context/product-context";
import { FilterContextProvider } from "./context/filter-context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <FilterContextProvider>
      <ProductContextProvider>
        <CategoryContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CategoryContextProvider>
      </ProductContextProvider>
    </FilterContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
