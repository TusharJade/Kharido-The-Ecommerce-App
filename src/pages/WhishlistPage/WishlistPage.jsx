import { ProductCard } from "../../components/ProductCard/ProductCard";
import { useWishlistContext } from "../../context/wishlist-context";
import "./WishlistPage.css";

const WishlistPage = () => {
  const { wishlistState, wishlistdispatch } = useWishlistContext();
  return (
    <>
      {wishlistState.wishList.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-bg">
            <img
              className="empty-cart-img"
              src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
              alt="Empty cart"
            />
            <div className="empty-cartText">Empty Wishlist</div>
            <div className="empty-cartText-two">
              You have no items in your wishlist. Start adding!
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="wishlist-text">My Wishlist</div>
          <div className="wishlist-container">
            {wishlistState.wishList.map((items) => {
              return items.inWishlist === true ? (
                <ProductCard key={items._id} item={items} />
              ) : (
                items
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export { WishlistPage };
