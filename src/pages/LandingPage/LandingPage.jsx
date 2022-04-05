import { ProductCategory } from "../../components/ProductCategory/ProductCategory";
import { useCategoryContext } from "../../context/category-context";
import "./LandingPage.css";
import { useProductContext } from "../../context/product-context";
import { ProductCardLanding } from "../../components/ProductCardLanding/ProductCardLanding";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const { category, setCategory } = useCategoryContext();
  const { products, setProducts } = useProductContext();
  return (
    <>
      <Link to="/ProductListing" className="link-style">
        <section className="section-categery">
          {category.map((items) => {
            return <ProductCategory key={items._id} item={items} />;
          })}
        </section>
      </Link>
      <section className="deals-ofday">
        <div className="offer-name">
          <div className="dealname">All Products</div>
          <Link to="/ProductListing">
            <button className="view-all">View All</button>
          </Link>
        </div>

        <div className="deals-line"></div>
        <div className="product-landing-outerbox">
          {products.map((items) => (
            <ProductCardLanding key={items._id} item={items} />
          ))}
        </div>
      </section>
    </>
  );
};

export { LandingPage };
