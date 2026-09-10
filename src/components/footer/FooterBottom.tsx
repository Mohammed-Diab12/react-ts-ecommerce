import { Box, Typography, Divider, Stack, Container } from "@mui/material";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcStripe,
  FaCcDiscover,
} from "react-icons/fa6";

function FooterBottom() {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#1f1f1f" }}>
      <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          py: 2,
        }}
      >
        <Typography variant="body2" sx={{ color: "#767676" }}>
          © 2018 Made with{" "}
          <Box component="span" sx={{ color: "white" }}>
            ZooTemplate
          </Box>
          . All Rights Reserved.
        </Typography>

        <Stack direction="row" spacing={1} sx={{ color: "#949494" }}>
          <FaCcVisa size={28} />
          <FaCcMastercard size={28} />
          <FaCcPaypal size={28} />
          <FaCcStripe size={28} />
          <FaCcDiscover size={28} />
        </Stack>
      </Container>
    </Box>
  );
}

export default FooterBottom;
