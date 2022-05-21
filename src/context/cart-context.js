import { useContext, createContext, useEffect, useState } from "react";
import { useAuthContext } from "./auth-context";
import axios from "axios";

const CartContext = createContext(null);

const CartContextProvide = ({ children }) => {
  const { auth, setAuth } = useAuthContext();

  const [myCart, setMyCart] = useState([]);

  const customHeader = {
    headers: {
      authorization: auth.token,
    },
  };

  useEffect(() => {
    if (auth.loginStatus) {
      (async () => {
        try {
          const response = await axios.get("/api/user/cart", customHeader);
          setMyCart(response.data.cart);
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      setMyCart([]);
    }
  }, [auth]);

  const addToCart = async (product) => {
    try {
      const response = await axios.post(
        "/api/user/cart",
        { product },
        customHeader
      );
      setMyCart(response.data.cart);
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromCart = async (productID) => {
    try {
      const response = await axios.delete(
        `/api/user/cart/${productID}`,
        customHeader
      );
      setMyCart(response.data.cart);
    } catch (error) {
      console.log(error);
    }
  };

  const increaseQtyOfCard = async (productID, addOrRemove) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${productID}`,
        {
          action: {
            type: addOrRemove,
          },
        },
        customHeader
      );
      setMyCart(response.data.cart);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        myCart,
        setMyCart,
        addToCart,
        removeFromCart,
        increaseQtyOfCard,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);

export { useCartContext, CartContextProvide };
