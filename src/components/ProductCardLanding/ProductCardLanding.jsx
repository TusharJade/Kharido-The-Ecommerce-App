import "./ProductCardLanding.css";
import { Link } from "react-router-dom";

const ProductCardLanding = ({ item }) => {
  return (
    <Link className="cart-link" to={`/ProductDetails/${item._id}`}>
      <div className="card-anchor">
        <div className="card-container-simple">
          <div className="card-img-box">
            <img className="card-image" src={item.img} alt={item.title} />
          </div>
          <div className="brand-name">{item.title}</div>
          <div className="category-simple">{item.description}</div>
          <div className="price-is">Rs. {item.discountPrice}</div>
          <div className="price-cut-container-simple">
            <span className="price-cut">Rs. {item.mrp}</span>
            <span className="price-offer">({item.discountPercent}% off)</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export { ProductCardLanding };
