import "./CartPrice.css";

const CartPrice = () => {
  return (
    <div class="cart-calculater">
      <div class="cartheading-calc">
        <div class="price-details">PRICE DETAILS &nbsp;</div>
        <span>(0 itmes)</span>
      </div>

      <div class="pricing-outerbox">
        <div class="divbox">
          <div>Total MRP</div>
          <div class="total-mrpnum ">₹1000</div>
        </div>

        <div class="divbox">
          <div>Discount on MRP</div>
          <div class="green-color">-₹100</div>
        </div>

        <div class="divbox line">
          <div>Delivery Fee</div>
          <div class="green-color">Free</div>
        </div>
      </div>

      <div class="total-paybox">
        <div>Total Amount</div>
        <div>900</div>
      </div>

      <div class="placeorder-div">
        <button class="place-order">Place order</button>
      </div>
    </div>
  );
};

export { CartPrice };
