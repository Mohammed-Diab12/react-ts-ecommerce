import {Box, Typography, Button } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
function PromoBanner() {
  return (
      <Box
        sx={{
          alignItems: "stretch",
          maxWidth: "100%",
        mx: "auto",
        my: 5,
        overflow: "hidden",
        bgcolor: "brand.main",
        display: { xs: "none", md: "flex" },
      }}
    >
     
      <Typography
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          px: 5,
          py: 2,
          textAlign: "center",
          color: "background.paper",
          fontSize: "0.875rem",
          justifyContent: "center",
        }}
      >
        Save your moneys with super promotion, available every Sunday in the weekend!
      </Typography>
      <Button
        endIcon={<ArrowRightAltIcon sx={{ transition: "transform 0.2s ease" }} />}
        sx={{
       px: 7,
          color: "background.paper",
          bgcolor: "primary.main",
          fontSize: "0.60rem",
          fontWeight: 300,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          borderRadius: 0,
          clipPath: "polygon(40px 0, 100% 0, 100% 100%, 0 100%)",
          "&:hover": {
            bgcolor: "#8f1a25",
            "& .MuiButton-endIcon": {
              transform: "translateX(3px)",
            },
          },
        }}
      >
        Learn more
      </Button>
    </Box>
  );
}

export default PromoBanner;