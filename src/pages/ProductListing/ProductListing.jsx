import "./ProductListing.css";
import { FilterBar } from "../../components/FilterBar/FilterBar";
import { ProductsByFilter } from "../../components/ProductsByFilter/ProductsByFilter";

const ProductListing = () => {
  return (
    <div className="cart-page">
      <FilterBar />
      <ProductsByFilter />
    </div>
  );
};

export { ProductListing };
