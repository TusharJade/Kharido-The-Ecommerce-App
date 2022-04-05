import "./ProductsByFilter.css";
import { ProductCard } from "../ProductCard/ProductCard";
import { useProductContext } from "../../context/product-context";
import { useFilterContext } from "../../context/filter-context";

const ProductsByFilter = () => {
  const { products, setProducts } = useProductContext();
  const { productListState, productListDispatch } = useFilterContext();

  const sortBy = (data, sortvalue) => {
    if (sortvalue === "LOW_TO_HIGH") {
      return data.sort(
        (a, b) => a.discountPriceCalculation - b.discountPriceCalculation
      );
    } else if (sortvalue === "HIGH_TO_LOW") {
      return data.sort(
        (a, b) => b.discountPriceCalculation - a.discountPriceCalculation
      );
    } else return data;
  };

  const byRating = (data, ratingCompare) => {
    return data.filter((item) => item.rating >= ratingCompare);
  };

  const bycategory = (data, category) => {
    if (category.length !== 0) {
      return data.filter((item) => category.includes(item.categoryName));
    } else return data;
  };

  const finalData = bycategory(
    byRating(
      sortBy([...products], productListState.sort),
      productListState.rating
    ),
    productListState.category
  );

  return (
    <section className="product-listing">
      {finalData.map((items) => {
        return <ProductCard key={items._id} item={items} />;
      })}
    </section>
  );
};

export { ProductsByFilter };
