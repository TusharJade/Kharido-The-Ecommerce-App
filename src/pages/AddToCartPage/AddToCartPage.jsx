import { HorizontalCard } from "../../components/HorizontalCard/HorizontalCard";
import { CartPrice } from "../../components/CartPrice/CartPrice";
import { useCartContext } from "../../context/cart-context";
import { Link } from "react-router-dom";
import "./AddToCartPage.css";
const AddToCartPage = () => {
  const { cartState, cartDispatch } = useCartContext();
  return (
    <div className="mainbox">
      <div className="card-outerspace">
        {cartState.cartList.map((items) => {
          return <HorizontalCard key={items._id} item={items} />;
        })}
      </div>
      {cartState.cartList.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-bg">
            <img
              className="empty-cart-img"
              src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
              alt="Empty cart"
            />
            <div className="empty-cartText">Your cart is empty!</div>
            <div className="empty-cartText-two">Add items to it now.</div>
            <Link to="/ProductListing">
              <button className="shop-now">Shop Now</button>
            </Link>
          </div>
        </div>
      ) : (
        <CartPrice />
      )}
    </div>
  );
};

export { AddToCartPage };
