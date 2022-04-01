import "./ProductCard.css";

const ProductCard = ({ item }) => {
  return (
    <div className="card-container-part">
      <div className="card-img-box">
        <img className="card-image" src={item.img} alt="img error" />
      </div>
      <div className="all-data">
        <div className="brand-name">{item.title}</div>
        <div className="category">{item.description}</div>
        <div className="price">Rs. {item.discountPrice}</div>
        <div className="price-cut-container">
          <span className="price-cut">Rs. {item.mrp}</span>
          <span className="price-offer">
            ({item.discountPercent}% off) &nbsp;
          </span>
          <span className="price-rating">
            {item.rating} <i className="fas fa-star price-star"></i>
          </span>
        </div>
      </div>

      <button className="card-add-btn">
        <i className="fas fa-shopping-cart"></i> Add to cart
      </button>
      <div>
        <i className="fas fa-heart heart"></i>
      </div>
    </div>
  );
};

export { ProductCard };
