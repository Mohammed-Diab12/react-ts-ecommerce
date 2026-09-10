import { Typography, Stack, Box } from "@mui/material";

const linksColumn = (title: string, links: string[]) => {
  return (
    <div>
      <Typography variant="h5" sx={{ mb: 3.5, fontWeight: 600 }}>
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
            }}
          >
            {link}
          </Typography>
        ))}
      </Stack>
    </div>
  );
};

function FooterLinks() {
  const links = {
    "Our Stores": [
      "501 Floor, Nguyen Ngoc Vu, Cau Giay, Ha Noi",
      "741 - 11A Sandiago, L.A City, USA",
      "5th Floor, 169 Green Lakes, WestBrown,",
      "Liverpool City",
      "628 Brooklyn Street, Fulham District, Wales",
      "10001 Street, WinLow District, Mexico",
      "1st Floor BrickHouse, 250 Wall Street, C.A City UK",
    ],
    "My Account": [
      "My Cart",
      "Check Out",
      "Wishlis",
      "Term & Policy",
      "Your Account",
    ],
    Infomation: [
      "Shipping & Return",
      "Gifcards",
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
        gap: 2,
        mt: 2,
        color: "white",
        p: 2,
        width: "100%",
      }}
    >
      {Object.entries(links).map(([title, linkList]) =>
        linksColumn(title, linkList),
      )}
    </Box>
  );
}

export default FooterLinks;
