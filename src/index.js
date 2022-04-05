import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { CategoryContextProvider } from "./context/category-context";
import { ProductContextProvider } from "./context/product-context";
import { FilterContextProvider } from "./context/filter-context";
import { CartContextProvide } from "./context/cart-context";
import { WishlistContextProvider } from "./context/wishlist-context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <WishlistContextProvider>
      <CartContextProvide>
        <FilterContextProvider>
          <ProductContextProvider>
            <CategoryContextProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </CategoryContextProvider>
          </ProductContextProvider>
        </FilterContextProvider>
      </CartContextProvide>
    </WishlistContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
