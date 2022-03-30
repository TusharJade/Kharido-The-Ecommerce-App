import "./ProductCard.css";

const ProductCart = () => {
  return (
    <div className="card-container-part">
      <div className="card-img-box">
        <img
          className="card-image"
          src="https://i.pinimg.com/originals/90/a0/ec/90a0ec57079416bfedb2a2c74377c48d.jpg"
          alt=""
        />
      </div>
      <div className="all-data">
        <div className="brand-name">Lacoste</div>
        <div className="category">Men Slim Fit Tshirt</div>
        <div className="price">Rs. 999</div>
        <div className="price-cut-container">
          <span className="price-cut">Rs.1999 </span>
          <span className="price-offer">(50% off) &nbsp;</span>
          <span className="price-rating">
            4.5 <i className="fas fa-star price-star"></i>
          </span>
        </div>
      </div>

      <button className="card-add-btn">
        <i className="fas fa-shopping-cart"></i>Add to cart
      </button>
      <div>
        <i className="fas fa-heart heart"></i>
      </div>
    </div>
  );
};

export { ProductCart };
