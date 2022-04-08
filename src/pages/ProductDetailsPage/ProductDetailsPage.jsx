import "./ProductDetailsPage.css";
import { useParams } from "react-router-dom";
import { useProductContext } from "../../context/product-context";
import { ProductDetailCard } from "../../components/ProductDetailCard/ProductDetailCard";

const ProductDetailsPage = () => {
  const { ProductId } = useParams();
  const { products, setProducts } = useProductContext();

  const productDetailDataFunc = (data, id) => {
    return data.find((uniqueItem) => uniqueItem._id === id);
  };

  const productDetailPageData = productDetailDataFunc([...products], ProductId);

  return <ProductDetailCard item={productDetailPageData} />;
};

export { ProductDetailsPage };
