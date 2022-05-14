import "./ProductCard.css";
import { useCartContext } from "../../context/cart-context";
import { useWishlistContext } from "../../context/wishlist-context";
import { useAuthContext } from "../../context/auth-context";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const { myWishlist, addToWishlist, removeFromWishlist } =
    useWishlistContext();
  const { myCart, addToCart } = useCartContext();
  const { auth } = useAuthContext();
  const navigate = useNavigate();

  return (
    <div
      className="card-container-part noSelect"
      onClick={(e) => {
        e.stopPropagation();
        navigate(`/ProductDetails/${item._id}`);
      }}
    >
      <div className="card-img-box">
        <img className="card-image" src={item.img} alt="img error" />
      </div>
      <div className="all-data">
        <div className="brand-name">{item.title}</div>
        <div className="category">{item.description}</div>
        <div className="price">Rs. {item.discountPrice}</div>
        <div className="price-cut-container">
          <span className="price-cut">Rs. {item.mrp}</span>
          <span className="price-offer">
            ({item.discountPercent}% off) &nbsp;
          </span>
          <span className="price-rating">
            {item.rating} <i className="fas fa-star price-star"></i>
          </span>
        </div>
      </div>

      {myCart.find((cartItem) => cartItem._id === item._id) ? (
        <Link
          to="/AddToCart"
          className="link"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="card-add-btn go-to-cart-btn">
            <i className="fas fa-shopping-cart"></i> Go to cart
          </button>
        </Link>
      ) : (
        <button
          className="card-add-btn"
          onClick={(e) => {
            e.stopPropagation();
            auth.loginStatus ? addToCart(item) : navigate("/Login");
          }}
        >
          <i className="fas fa-shopping-cart"></i> Add to cart
        </button>
      )}

      {myWishlist.find((wishlistItem) => wishlistItem._id === item._id) ? (
        <div
          onClick={(e) => {
            e.stopPropagation();
            removeFromWishlist(item._id);
          }}
          className="wishlist-hover"
        >
          <i className="fas fa-heart heart heartfull"></i>
        </div>
      ) : (
        <div
          onClick={(e) => {
            e.stopPropagation();
            auth.loginStatus ? addToWishlist(item) : navigate("/Login");
          }}
          className="wishlist-hover"
        >
          <i className="fas fa-heart heart"></i>
        </div>
      )}
    </div>
  );
};

export { ProductCard };
