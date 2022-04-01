import { ProductCategory } from "../../components/ProductCategory/ProductCategory";
import { useCategoryContext } from "../../context/category-context";
import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const { category, setCategory } = useCategoryContext();
  return (
    <Link to="/ProductListing" className="link-style">
      <section className="section-categery">
        {category.map((items) => {
          return <ProductCategory item={items} />;
        })}
      </section>
    </Link>
  );
};

export { LandingPage };
