import { Link, Outlet } from "react-router-dom";

export const About = () => {
  return (
    <>
      <h2>AboutUs</h2>
      <p>we</p>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          display: "flex",
          columnGap: "20px",
          placeContent: "center",
        }}
      >
        <li>
          <Link to="mission">Info about company mission</Link>
        </li>
        <li>
           <Link to="team">Info about company team</Link> {/* без / это подстраница с / новая */}
        </li>
        <li>
          <Link to="reviews">Info about company reviews</Link>
        </li>
        <li>
          <Link to="/products">Go to Products</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
