import { Box, IconButton, Stack, Typography } from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  Pinterest,
  Google,
  RssFeed,
} from "@mui/icons-material";
function SocialMedia() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
        mt: 2,
        color: "white",
        p: { xs: 2, sm: 3 },
        width: "100%",
        mb: 3,
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 2, sm: 6, md: 10 },
        }}
      >
        <Stack direction="column" spacing={1}>
          <Typography variant="body2" sx={{ color: "#696969" }}>
            Our Office Address
          </Typography>
          <Typography variant="body1" color="initial">
            169 Florida Ave, L.A City
          </Typography>
        </Stack>
        <Stack direction="column" spacing={1}>
          <Typography variant="body2" sx={{ color: "#696969" }}>
            Please call Us:
          </Typography>
          <Typography variant="body1" color="initial">
            (+84) 1234 686 9669
          </Typography>
        </Stack>
      </Box>
      {/* Social Media Icons */}
      <Box
        sx={{
          gap: 1,
          display: "flex",
        }}
        aria-label="social media links"
      >
        <IconButton sx={{ color: "white" }} aria-label="Facebook">
          <Facebook />
        </IconButton>
        <IconButton sx={{ color: "white" }} aria-label="Twitter">
          <Twitter />
        </IconButton>
        <IconButton sx={{ color: "white" }} aria-label="Pinterest">
          <Pinterest />
        </IconButton>
        <IconButton sx={{ color: "white" }} aria-label="Google">
          <Google />
        </IconButton>
        <IconButton sx={{ color: "white" }} aria-label="Instagram">
          <Instagram />
        </IconButton>
        <IconButton sx={{ color: "white" }} aria-label="RssFeed">
          <RssFeed />
        </IconButton>
      </Box>
    </Box>
  );
}

export default SocialMedia;
