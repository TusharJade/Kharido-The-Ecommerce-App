import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";

const ProductContext = createContext(null);

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productCall = async () => {
      try {
        const response = await axios.get("/api/products");
        setProducts(response.data.products);
      } catch (err) {
        console.log("Error is there", err);
      }
    };
    productCall();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => useContext(ProductContext);

export { useProductContext, ProductContextProvider };
