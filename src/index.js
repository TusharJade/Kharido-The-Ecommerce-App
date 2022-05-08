import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { CategoryContextProvider } from "./context/category-context";
import { ProductContextProvider } from "./context/product-context";
import { FilterContextProvider } from "./context/filter-context";
import { CartContextProvide } from "./context/cart-context";
import { WishlistContextProvider } from "./context/wishlist-context";
import { AuthContextProvider } from "./context/auth-context";
// Call make Server
makeServer();

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
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
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
