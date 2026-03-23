import { getProducts } from "./apiService";
import { ProductList } from "../components/ProductList";
import { ProductDetails } from "./ProductDetails";
import { useSearchParams } from "react-router-dom";
import { SearchBox } from "../components/SearchBox";

export const Product = () => {
  const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get("name") ?? '';
  
  
  const updateQueryString = name => {
    const nextParams = name !== "" ? {name} : {};
    setSearchParams(nextParams)
  };

  const visibleProducts = products.filter(product => product.name.toLowerCase().includes(productName.toLowerCase()));

  const handleSort = () => {
    const params = Object.fromEntries(searchParams.entries())
    setSearchParams({...params , sort: "price" })
}

  return (
    <>
      <h2>Products</h2>
      {/* <ProductDetails /> */}
      <SearchBox value={productName} onChange={updateQueryString}  />
      <ProductList products={visibleProducts}  />
    </>
  );
};
