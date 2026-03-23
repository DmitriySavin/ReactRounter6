import { Container, Header, Logo, Link } from "./SharedLayoutStyled";
import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
              <Logo>
                 BrandName
              </Logo>
              <nav style={{display: 'flex' , columnGap: '20px'}}>
                  <Link to="/">Home</Link>
                  <Link to="/about">About us</Link>
                  <Link to="/products">Products</Link>
              </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
