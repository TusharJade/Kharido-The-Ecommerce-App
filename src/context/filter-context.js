import { createContext, useContext, useReducer } from "react";

const FilterContext = createContext(null);

const productListReducerFunc = (productListState, action) => {
  switch (action.type) {
    case "SORT":
      return { ...productListState, sort: action.payload };
    case "RATING":
      return { ...productListState, rating: action.payload };
    case "CATEGORY":
      return {
        ...productListState,
        category: productListState.category.includes(action.payload)
          ? productListState.category.filter((item) => item !== action.payload)
          : [...productListState.category, action.payload],
      };
    default:
      return {
        sort: null,
        rating: null,
        category: [],
      };
  }
};

const FilterContextProvider = ({ children }) => {
  const [productListState, productListDispatch] = useReducer(
    productListReducerFunc,
    {
      sort: null,
      rating: null,
      category: [],
    }
  );

  return (
    <FilterContext.Provider value={{ productListState, productListDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => useContext(FilterContext);

export { useFilterContext, FilterContextProvider };
