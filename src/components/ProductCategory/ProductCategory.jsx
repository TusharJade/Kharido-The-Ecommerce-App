import { useFilterContext } from "../../context/filter-context";
import "./ProductCategory.css";

const ProductCategory = ({ item }) => {
  const { productListDispatch } = useFilterContext();
  return (
    <div
      className="category-anchor"
      onClick={() =>
        productListDispatch({ type: "CATEGORY", payload: item.categoryName })
      }
    >
      <img className="category-img" src={item.img} alt={item.name} />
      <div className="brand-name">{item.name}</div>
    </div>
  );
};

export { ProductCategory };
