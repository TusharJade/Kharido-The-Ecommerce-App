import "./ProductDetailCard.css";
import { useWishlistContext } from "../../context/wishlist-context";
import { useCartContext } from "../../context/cart-context";
import { Link } from "react-router-dom";

const ProductDetailCard = ({ item }) => {
  const { myWishlist, setMyWishlist, addToWishlist, removeFromWishlist } =
    useWishlistContext();
  const { myCart, addToCart } = useCartContext();
  return (
    <div className="main-box">
      <div className="leftside-productbox">
        <div className="productimg-outerbox">
          <img src={item.img} className="productimg-details" />
        </div>
        <div className="btn-outerbox">
          {myCart.find((cartItem) => cartItem._id === item._id) ? (
            <Link to="/AddToCart">
              <button className="product-details add-to-cart">
                <i className="fas fa-shopping-cart"></i> Go To Cart
              </button>
            </Link>
          ) : (
            <button
              onClick={() => addToCart(item)}
              className="product-details add-to-cart"
            >
              <i className="fas fa-shopping-cart"></i> Add To Cart
            </button>
          )}

          {myWishlist.find((wishListItem) => wishListItem._id === item._id) ? (
            <Link to="/Wishlist">
              <button className="product-details add-to-wishlist">
                Go To Wishlist
              </button>
            </Link>
          ) : (
            <button
              onClick={() => addToWishlist(item)}
              className="product-details add-to-wishlist"
            >
              Add To Wishlist
            </button>
          )}
        </div>
      </div>
      <div className="rightside-detailbox">
        <div className="main-title-pd">{item.title}</div>
        <div className="title-des">{item.description}</div>
        <div className="special-price">Special Price</div>
        <div className="all-prcing-inOne">
          <div className="discount-price-pd">₹{item.discountPrice}</div>
          <div className="mrp-pd">₹{item.mrp}</div>
          <div className="discount-percent-pd">{item.discountPercent}% off</div>
        </div>
        <div className="rating-pd">
          {item.rating}
          <i className="fas fa-star price-star str"> </i>
        </div>
        <div className="product-details-heading">Product Details</div>
        <p className="product-details-des">{item.productDetail}</p>
      </div>
    </div>
  );
};

export { ProductDetailCard };
