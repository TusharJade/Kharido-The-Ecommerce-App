import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./auth-context";
import axios from "axios";

const WishlistContext = createContext(null);

const WishlistContextProvider = ({ children }) => {
  const { auth } = useAuthContext();

  const [myWishlist, setMyWishlist] = useState([]);

  const customHeader = {
    headers: {
      authorization: auth.token,
    },
  };

  useEffect(() => {
    if (auth.loginStatus) {
      (async () => {
        try {
          const response = await axios.get("/api/user/wishlist", customHeader);
          setMyWishlist(response.data.wishlist);
        } catch (error) {
          console.log(error);
        }
      })();
    } else setMyWishlist([]);
  }, [auth]);

  const addToWishlist = async (product) => {
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        { product },
        customHeader
      );
      setMyWishlist(response.data.wishlist);
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromWishlist = async (productID) => {
    try {
      const response = await axios.delete(
        `/api/user/wishlist/${productID}`,
        customHeader
      );
      setMyWishlist(response.data.wishlist);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WishlistContext.Provider
      value={{ myWishlist, setMyWishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlistContext = () => useContext(WishlistContext);

export { useWishlistContext, WishlistContextProvider };
