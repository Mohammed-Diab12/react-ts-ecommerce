import { Link } from "react-router-dom";
import PromoBanner from "../components/Home/PromoBanner";
import MobileDevicesCategory from "../components/Home/category/MobileDevicesCategory";
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
      <MobileDevicesCategory/>
      <PromoBanner/>
    </Container>
  );
}

export default HomePage;
