import "./CartPrice.css";

const CartPrice = () => {
  return (
    <div className="cart-calculater">
      <div className="cartheading-calc">
        <div className="price-details">PRICE DETAILS &nbsp;</div>
        <span>(0 itmes)</span>
      </div>

      <div className="pricing-outerbox">
        <div className="divbox">
          <div>Total MRP</div>
          <div className="total-mrpnum ">₹1000</div>
        </div>

        <div className="divbox">
          <div>Discount on MRP</div>
          <div className="green-color">-₹100</div>
        </div>

        <div className="divbox line">
          <div>Delivery Fee</div>
          <div className="green-color">Free</div>
        </div>
      </div>

      <div className="total-paybox">
        <div>Total Amount</div>
        <div>900</div>
      </div>

      <div className="placeorder-div">
        <button className="place-order">Place order</button>
      </div>
    </div>
  );
};

export { CartPrice };
