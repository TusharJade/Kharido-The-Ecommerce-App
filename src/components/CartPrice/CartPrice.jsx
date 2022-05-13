import { useCartContext } from "../../context/cart-context";
import "./CartPrice.css";

const CartPrice = () => {
  const { myCart, addToCart } = useCartContext();

  const totalPriceByDiscount = myCart.reduce(
    (acu, value) => {
      return {
        ...acu,
        price: acu.price + Number(value.discountPriceCalculation) * value.qty,
      };
    },
    { price: 0 }
  );

  const totalMRP = myCart.reduce(
    (acu, value) => {
      return {
        ...acu,
        price: acu.price + Number(value.mrpCalculation) * value.qty,
      };
    },
    { price: 0 }
  );

  const discountOnMRP = totalMRP.price - totalPriceByDiscount.price;

  return (
    <div className="cart-calculater">
      <div className="cartheading-calc">
        <div className="price-details">PRICE DETAILS &nbsp;</div>
        <span>
          {myCart.length === 0 ? `(0 items)` : `(${myCart.length} items)`}
        </span>
      </div>

      <div className="pricing-outerbox">
        <div className="divbox">
          <div>Total MRP</div>
          <div className="total-mrpnum ">
            ₹{totalMRP.price.toLocaleString("en-US")}
          </div>
        </div>

        <div className="divbox">
          <div>Discount on MRP</div>
          <div className="green-color">
            -₹{discountOnMRP.toLocaleString("en-US")}
          </div>
        </div>

        <div className="divbox line">
          <div>Delivery Fee</div>
          <div className="green-color">Free</div>
        </div>
      </div>

      <div className="total-paybox">
        <div>Total Amount</div>
        <div>₹{totalPriceByDiscount.price.toLocaleString("en-US")}</div>
      </div>

      <div className="placeorder-div">
        <button className="place-order">Place order</button>
      </div>
    </div>
  );
};

export { CartPrice };
