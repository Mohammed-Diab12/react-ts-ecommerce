import NewsletterForm from "./NewsletterForm";
import { Box, Divider } from "@mui/material";
import SocialMedia from "./SocialMedia";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";
function Footer() {
  return (
    <footer>
      <NewsletterForm />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: 2,
          backgroundColor: "#252525",
          p: 2,
          my: 0,
        }}
      >
        <SocialMedia />
        <Divider color="#696969" />
        <FooterLinks />
        <FooterBottom />
      </Box>
    </footer>
  );
}

export default Footer;
