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
            return <ProductCategory item={items} />;
          })}
        </section>
      </Link>
      <section class="deals-ofday">
        <div class="offer-name">
          <div class="dealname">Deals of the Day</div>
          <Link to="/ProductListing">
            <button className="view-all">View All</button>
          </Link>
        </div>

        <div class="deals-line"></div>
        <div className="product-landing-outerbox">
          {products.map((items) => (
            <ProductCardLanding item={items} />
          ))}
        </div>
      </section>
    </>
  );
};

export { LandingPage };
