import { useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "../../context/auth-context";
import { useCartContext } from "../../context/cart-context";
import { useWishlistContext } from "../../context/wishlist-context";
import "./Navbar.css";

const Navbar = () => {
  const { auth, setAuth } = useAuthContext();
  const navigate = useNavigate();
  const { myCart } = useCartContext();
  const { myWishlist } = useWishlistContext();

  const logoutHandler = () => {
    localStorage.removeItem("USER_INFO");
    localStorage.removeItem("TOKEN");

    setAuth({
      loginStatus: localStorage.getItem("TOKEN") ? true : false,
      token: localStorage.getItem("TOKEN"),
      user: JSON.parse(localStorage.getItem("USER_INFO")),
    });

    navigate("/Login");
  };

  return (
    <header className="simple-head">
      <Link to="/" className="header-name">
        Kharido
      </Link>
      <div className="end-headside">
        <Link
          to={auth.loginStatus ? "/Wishlist" : "/Login"}
          className="header-cart-color"
        >
          <div className="wishlist-icon">
            <i className="far fa-heart"></i>
            {myWishlist.length === 0 ? null : (
              <span className="notification two">{myWishlist.length}</span>
            )}
          </div>
        </Link>
        <Link
          to={auth.loginStatus ? "/AddToCart" : "/Login"}
          className="header-cart-color"
        >
          <div className="cart-iconbox">
            <i className="fas fa-shopping-cart"></i>
            {myCart.length === 0 ? null : (
              <span className="notification">{myCart.length}</span>
            )}
          </div>
        </Link>

        {auth.loginStatus ? (
          <div className="head-login logout-btn" onClick={logoutHandler}>
            Logout
          </div>
        ) : (
          <Link className="head-login" to="/Login">
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export { Navbar };
