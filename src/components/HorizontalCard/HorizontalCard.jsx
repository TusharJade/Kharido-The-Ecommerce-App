import "./HorizontalCard.css";

const HorizontalCard = () => {
  return (
    <div className="card-container-horiz">
      <div className="card-img-box">
        <img
          className="card-image"
          src="https://i.pinimg.com/originals/90/a0/ec/90a0ec57079416bfedb2a2c74377c48d.jpg"
          alt=""
        />
      </div>
      <div className="horizon-content-text">
        <div className="brand-name">Lacoste</div>
        <div className="category">Men Slim Fit Tshirt</div>
        <div className="price">Rs. 999</div>
        <div className="price-cut-container">
          <span className="price-cut">Rs.1999</span>
        </div>
        <div className="horizon-btn-div">
          <button className="horizon-btn">
            <i class="fas fa-plus plus-minus"></i>
          </button>
          <span>1</span>
          <button className="horizon-btn">
            <i class="fas fa-minus plus-minus"></i>
          </button>
        </div>
        <button className="card-add-btn horizon-ca">Move to wishlist</button>
        <div className="delete-button">
          <i className="fas fa-times cross-color"></i>
        </div>
      </div>
    </div>
  );
};

export { HorizontalCard };
