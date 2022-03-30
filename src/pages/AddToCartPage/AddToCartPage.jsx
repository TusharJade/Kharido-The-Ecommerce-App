import { HorizontalCard } from "../../components/HorizontalCard/HorizontalCard";
import { CartPrice } from "../../components/CartPrice/CartPrice";
const AddToCartPage = () => {
  return (
    <div className="mainbox">
      <div className="card-outerspace">
        <HorizontalCard />
      </div>
      <CartPrice />
    </div>
  );
};

export { AddToCartPage };
