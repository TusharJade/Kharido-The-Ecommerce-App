import { useCartContext } from "../../context/cart-context";
import "./CartPrice.css";

const CartPrice = () => {
  const { cartState, cartDispatch } = useCartContext();

  const totalPriceByDiscount = cartState.cartList.reduce(
    (acu, value) => {
      return {
        ...acu,
        price: acu.price + parseInt(value.discountPrice) * value.cartQuantity,
      };
    },
    { price: 0 }
  );

  const totalMRP = cartState.cartList.reduce(
    (acu, value) => {
      return {
        ...acu,
        price: acu.price + parseInt(value.mrp) * value.cartQuantity,
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
          {cartState.cartList.length === 0
            ? `(0 items)`
            : `(${cartState.cartList.length} items)`}
        </span>
      </div>

      <div className="pricing-outerbox">
        <div className="divbox">
          <div>Total MRP</div>
          <div className="total-mrpnum ">₹{totalMRP.price}</div>
        </div>

        <div className="divbox">
          <div>Discount on MRP</div>
          <div className="green-color">-₹{discountOnMRP}</div>
        </div>

        <div className="divbox line">
          <div>Delivery Fee</div>
          <div className="green-color">Free</div>
        </div>
      </div>

      <div className="total-paybox">
        <div>Total Amount</div>
        <div>₹{totalPriceByDiscount.price}</div>
      </div>

      <div className="placeorder-div">
        <button className="place-order">Place order</button>
      </div>
    </div>
  );
};

export { CartPrice };
