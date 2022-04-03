import { useCartContext } from "../../context/cart-context";
import "./HorizontalCard.css";

const HorizontalCard = ({ item }) => {
  const { cartState, cartDispatch } = useCartContext();
  return (
    <div className="card-container-horiz">
      <div className="card-img-box">
        <img className="card-image" src={item.img} alt="" />
      </div>
      <div className="horizon-content-text">
        <div className="brand-name">{item.title}</div>
        <div className="category">{item.description}</div>
        <div className="price">Rs. {item.discountPrice}</div>
        <div className="price-cut-container">
          <span className="price-cut">Rs.{item.mrp}</span>
          <span class="price-offer">({item.discountPercent}% off)</span>
        </div>

        <div className="horizon-btn-div">
          <button
            className="horizon-btn"
            onClick={() => cartDispatch({ type: "DECREASE", payload: item })}
          >
            <i class="fas fa-minus plus-minus"></i>
          </button>
          <span>{item.cartQuantity}</span>
          <button
            className="horizon-btn"
            onClick={() => cartDispatch({ type: "INCREASE", payload: item })}
          >
            <i class="fas fa-plus plus-minus"></i>
          </button>
        </div>
        <button className="card-add-btn horizon-ca">Move to wishlist</button>
        <div
          className="delete-button"
          onClick={() =>
            cartDispatch({ type: "REMOVE_FROM_CART", payload: item })
          }
        >
          <i className="fas fa-times cross-color"></i>
        </div>
      </div>
    </div>
  );
};

export { HorizontalCard };
