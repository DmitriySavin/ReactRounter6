import { Container, CardWrapper, ProductName } from "./ProductListStyled";
import { Link } from "react-router-dom";

export const ProductList = ({ products }) => {
  return (
    <>
      {/* <h2>Products Page</h2> */}
      {products.map((product) => (
        <CardWrapper key={product.id}>
          <Link to={`${product.id}`}>
            <ProductName>{product.name}</ProductName>
          </Link>
        </CardWrapper>
      ))}
    </>
  );
};
