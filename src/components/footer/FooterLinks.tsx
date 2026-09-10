import { Typography, Stack, Box } from "@mui/material";

const linksColumn = (title: string, links: string[]) => {
  return (
    <Box
      sx={{
        minWidth: 0,
        maxWidth: title === "Our Stores" ? 280 : "none",
      }}
    >
      <Typography variant="body1" sx={{ mb: 3, fontWeight: 600 }}>
        {title}
      </Typography>

      <Stack spacing={1} sx={{ mt: 1 }}>
        {links.map((link, index) => (
          <Typography
            key={index}
            variant="body2"
            sx={{
              color: title === "Our Stores" ? "#5c5c5c" : "#767676",
              pb: title === "Our Stores" ? 1.5 : 0,
              overflowWrap: "break-word",
            }}
          >
            {link}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
};

function FooterLinks() {
  const links = {
    "Our Stores": [
      "501 Floor, Nguyen Ngoc Vu, Cau Giay, Ha Noi",
      "741 - 11A Sandiago, L.A City, USA",
      "5th Floor, 169 Green Lakes, WestBrown, Liverpool City",
      "628 Brooklyn Street, Fulham District, Wales",
      "10001 Street, WinLow District, Mexico",
      "1st Floor BrickHouse, 250 Wall Street, C.A City UK",
    ],
    "My Account": [
      "My Cart",
      "Check Out",
      "Wishlist",
      "Term & Policy",
      "Your Account",
    ],
    Information: [
      "Shipping & Return",
      "Gift Cards",
      "Track My Order",
      "Term & Policy",
      "FAQS",
    ],
    "How to Buy": [
      "Making Payments",
      "Delivery Options",
      "Buyer Protection",
      "New User Guide",
      "Partner Ship",
    ],
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: { xs: 3, sm: 4, md: 6 },
        mt: 2,
        py: 3.5,
        px: { xs: 2, sm: 3 },
        width: "100%",
        boxSizing: "border-box",
        flexDirection: { xs: "column", sm: "row" },
        flexWrap: { xs: "nowrap", sm: "wrap", md: "nowrap" },
        color: "white",
      }}
    >
      {Object.entries(links).map(([title, linkList]) => (
        <Box
          key={title}
          sx={{
            width: {
              xs: "100%",
              sm: "45%",
              md: "auto",
            },
          }}
        >
          {linksColumn(title, linkList)}
        </Box>
      ))}
    </Box>
  );
}

export default FooterLinks;
