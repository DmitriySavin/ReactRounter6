import { useLocation, useParams } from "react-router-dom";
import { getProductsById } from "./apiService";
import { BackLink } from "../components/BackLink";

export const ProductDetails = () => {
    const { productId } = useParams();

    const product = getProductsById(productId)
    const location = useLocation()
  const backLinkHref = location.state?.from ?? "/products";  
  return (
        
      <>
        <BackLink to={backLinkHref}>Back to products</BackLink>

      <h2>Product Info</h2>
      <h3>
        Product - {product.name} - {product.id}
      </h3>
      <p>Lorem ipsum dolor sit amet.</p>
    </>
  );
};
