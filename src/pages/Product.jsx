import { getProducts } from "./apiService";
import { ProductList } from "../components/ProductList";
import { ProductDetails } from "./ProductDetails";

export const Product = () => {
  const products = getProducts();

  return (
    <>
      <h2>Products</h2>
      {/* <ProductDetails /> */}

      <ProductList products={products} />
    </>
  );
};
