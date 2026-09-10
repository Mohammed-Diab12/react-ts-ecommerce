import NewsletterForm from "./NewsletterForm";
import { Box, Divider, Container } from "@mui/material";
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
          my: 0,
        }}
      >
        <Container maxWidth="lg">
          <SocialMedia />
          <Divider color="#696969" />
          <FooterLinks />
        </Container> 
        <FooterBottom />

      </Box>
    </footer>
  );
}

export default Footer;
