import { Link } from "react-router-dom";
import MobileDevicesCategory from "../components/Home/category/ProductCategoryCarousel";
import AudioSoundCategory from "../components/Home/category/ProductCategoryCarousel";
import bluetoothSpeaker from "../../public/bluetoothSpeaker.jpg";
import PromoBanner from "../components/Home/PromoBanner";
import BrandStrip from "../components/Home/BrandStrip";
import { Container, Box } from "@mui/material";

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

      <MobileDevicesCategory
        categoryTitle="Smartphone & Tablet"
        categories={["Smartphone", "Tablet"]}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          alignItems: "center",
        }}
      >
        <Box sx={{ flex: 1, minWidth: 0, width: "100%" }}>
          <AudioSoundCategory
            categoryTitle="Audio & Sound"
            categories={["Audio & Sound"]}
          />
        </Box>

        <Box
          component="img"
          src={bluetoothSpeaker}
          alt="Bluetooth Speaker"
          sx={{
            width: { xs: "70%", md: 250 },
            maxWidth: 250,
            objectFit: "contain",
          }}
        />
      </Box>
      <PromoBanner />
      <BrandStrip />
    </Container>
  );
}

export default HomePage;
