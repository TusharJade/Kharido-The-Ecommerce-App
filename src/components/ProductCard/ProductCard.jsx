import { useCartContext } from "../../context/cart-context";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import { useWishlistContext } from "../../context/wishlist-context";

const ProductCard = ({ item }) => {
  const { wishlistState, wishlistDispatch } = useWishlistContext();
  const { cartState, cartDispatch } = useCartContext();
  return (
    <div className="card-container-part">
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
          <Link to="/AddToCart" className="link">
            <i className="fas fa-shopping-cart"></i> Go to cart
          </Link>
        </button>
      ) : (
        <button
          className="card-add-btn"
          onClick={() => cartDispatch({ type: "ADD_TO_CART", payload: item })}
        >
          <i className="fas fa-shopping-cart"></i> Add to cart
        </button>
      )}

      {wishlistState.wishList.find(
        (wishlistItem) => wishlistItem._id === item._id
      ) ? (
        <div
          onClick={() =>
            wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: item })
          }
          className="wishlist-hover"
        >
          <i className="fas fa-heart heart heartfull"></i>
        </div>
      ) : (
        <div
          onClick={() =>
            wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: item })
          }
          className="wishlist-hover"
        >
          <i className="fas fa-heart heart"></i>
        </div>
      )}
    </div>
  );
};

export { ProductCard };
