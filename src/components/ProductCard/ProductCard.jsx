import "./ProductCard.css";
import { useCartContext } from "../../context/cart-context";
import { useWishlistContext } from "../../context/wishlist-context";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const { wishlistState, wishlistDispatch } = useWishlistContext();
  const { cartState, cartDispatch } = useCartContext();
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

      {cartState.cartList.find((cartItem) => cartItem._id === item._id) ? (
        <button className="card-add-btn">
          <Link
            to="/AddToCart"
            className="link"
            onClick={(e) => e.stopPropagation()}
          >
            <i className="fas fa-shopping-cart"></i> Go to cart
          </Link>
        </button>
      ) : (
        <button
          className="card-add-btn"
          onClick={(e) => {
            cartDispatch({ type: "ADD_TO_CART", payload: item });
            e.stopPropagation();
          }}
        >
          <i className="fas fa-shopping-cart"></i> Add to cart
        </button>
      )}

      {wishlistState.wishList.find(
        (wishlistItem) => wishlistItem._id === item._id
      ) ? (
        <div
          onClick={(e) => {
            wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: item });
            e.stopPropagation();
          }}
          className="wishlist-hover"
        >
          <i className="fas fa-heart heart heartfull"></i>
        </div>
      ) : (
        <div
          onClick={(e) => {
            wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: item });
            e.stopPropagation();
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
