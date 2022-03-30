import { ProductCart } from "../../components/ProductCard/ProductCard";
import "./WishlistPage.css";

const WishlistPage = () => {
  return (
    <div>
      <div class="wishlist-text">My Wishlist</div>
      <section class="wishlist-container">
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </section>
    </div>
  );
};

export { WishlistPage };
