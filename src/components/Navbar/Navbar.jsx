import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="simple-head">
      <Link to="/" class="header-name">
        Kharido
      </Link>
      <div className="end-headside">
        <Link to="/Wishlist" class="header-cart-color">
          <div>
            <i class="far fa-heart"></i>
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
