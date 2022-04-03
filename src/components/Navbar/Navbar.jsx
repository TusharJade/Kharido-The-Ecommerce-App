import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cart-context";
import "./Navbar.css";

const Navbar = () => {
  const { cartState, cartDispatch } = useCartContext();
  return (
    <header className="simple-head">
      <Link to="/" className="header-name">
        Kharido
      </Link>
      <div className="end-headside">
        <Link to="/Wishlist" className="header-cart-color">
          <div>
            <i className="far fa-heart"></i>
          </div>
        </Link>
        <Link to="/AddToCart" className="header-cart-color">
          <div className="cart-iconbox">
            <i className="fas fa-shopping-cart"></i>
            {cartState.cartList.length === 0 ? null : (
              <span className="notification">{cartState.cartList.length}</span>
            )}
          </div>
        </Link>
        <Link className="head-login" to="/Login">
          Login
        </Link>
      </div>
    </header>
  );
};

export { Navbar };
