import { Container, CardWrapper, ProductName } from "./ProductListStyled";
import { Link, useLocation } from "react-router-dom";

export const ProductList = ({ products }) => {
  const location = useLocation();

  return (
    <>
      {/* <h2>Products Page</h2> */}
      {products.map((product) => (
        <CardWrapper key={product.id}>
          <Link to={`/products/${product.id}`}>
            <ProductName>{product.name}</ProductName>
          </Link>
        </CardWrapper>
      ))}
    </>
  );
};
