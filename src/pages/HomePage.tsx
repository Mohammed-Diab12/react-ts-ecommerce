import { Link } from "react-router-dom";
import ProductCard from "../components/Home/ProductCard";
import { Box } from "@mui/material";

function HomePage() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>HomePage</h1>
      <ul>
        <li>
          <Link to={"/cart"}>Cart Page</Link>
        </li>
        <li>
          <Link to="/products/1phXjx94qtgXg9UkNHtc">Product Page</Link>
        </li>
      </ul>
      <Box sx={{ width: "30%" }}>
        <ProductCard
          id="2"
          title="Mohammed Diab Product"
          price={100}
          thumbnail="https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/thumbnail.webp"
          discountPercentage={20}
          category="Laptop"
        />
      </Box>
    </>
  );
}

export default HomePage;
