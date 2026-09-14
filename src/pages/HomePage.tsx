import { Link } from "react-router-dom";
import MobileDevicesCategory from "../components/Home/category/MobileDevicesCategory";
import PromoBanner from "../components/Home/PromoBanner";
import BrandStrip from "../components/Home/BrandStrip";
import { Container } from "@mui/material";

function HomePage() {
  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>HomePage</h1>
      <ul>
        <li>
          <Link to={"/cart"}>Cart Page</Link>
        </li>
        <li>
          <Link to="/products/1phXjx94qtgXg9UkNHtc">Product Page</Link>
        </li>
      </ul>


      <MobileDevicesCategory />
      <BrandStrip />
      <PromoBanner />
    </Container>
  );
}

export default HomePage;
