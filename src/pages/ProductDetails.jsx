import { useParams } from "react-router-dom";
import { getProductsById } from "./apiService";

export const ProductDetails = () => {
    const { productId } = useParams();

    const product = getProductById(productId)
    
    return (
        
    <>
      <h2>Product Info</h2>
      <h3>
        Product - {product.name} - {product.id}
      </h3>
      <p>Lorem ipsum dolor sit amet.</p>
    </>
  );
};
