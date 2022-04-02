import { useContext, createContext, useReducer } from "react";

const CartContext = createContext(null);

const cartReducerFunc = (cartState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...cartState,
        cartList: [
          ...cartState.cartList,
          { ...action.payload, cartQuantity: 1 },
        ],
      };
    case "REMOVE_FROM_CART":
      return {
        ...cartState,
        cartList: cartState.cartList.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "INCREASE":
      return {
        ...cartState,
        cartList: cartState.cartList.map((item) =>
          item._id === action.payload._id
            ? { ...item, cartQuantity: item.cartQuantity + 1 }
            : item
        ),
      };
    case "DECREASE":
      return {
        ...cartState,
        cartList: cartState.cartList.map((item) =>
          item._id === action.payload._id
            ? {
                ...item,
                cartQuantity:
                  item.cartQuantity === 1
                    ? item.cartQuantity
                    : item.cartQuantity - 1,
              }
            : item
        ),
      };

    default:
      return { ...cartState };
  }
};

const CartContextProvide = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducerFunc, {
    cartList: [],
  });
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);

export { useCartContext, CartContextProvide };
