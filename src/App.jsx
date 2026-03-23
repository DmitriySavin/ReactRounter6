import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Product } from "./pages/Product";
import { NotFound } from "./pages/404";
import styled from "styled-components";
import { Mission } from "./components/Mission";
import { Reviews } from "./components/Reviews";
import { Team } from "./components/Team";
import { ProductDetails } from "./pages/ProductDetails";
import { SharedLayout } from "./components/SharedLayout";

const StyledLink = styled(NavLink)`
  margin: 10px;
  color: grey;

  &.active {
    color: tomato;
  }
`;

function App() {
  return (
    <>
      {/* <nav>
        <StyledLink to="/ReactRounter6/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
      </nav> */}

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}/>
          {/* Вложенные маршруты */}
          <Route path="/about" element={<About />}>
            <Route path="mission" element={<Mission />} />
            <Route path="team" element={<Team />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          {/* end */}
          <Route path="/products" element={<Product />} />
          <Route
            path="/products/:productId"
            element={<ProductDetails />}/>
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
