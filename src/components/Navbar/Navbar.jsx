import { Link } from "react-router-dom";

const Navbar = () => {
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
          <i className="fas fa-shopping-cart"></i>
        </Link>
        <Link className="head-login" to="/Login">
          Login
        </Link>
      </div>
    </header>
  );
};

export { Navbar };
