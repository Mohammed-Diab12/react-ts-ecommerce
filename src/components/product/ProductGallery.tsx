import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import ImageNotSupportedOutlinedIcon from "@mui/icons-material/ImageNotSupportedOutlined";
export interface ProductGalleryProps {
  images: string[];
  alt: string;
}

export const ProductGallery = ({ images, alt }: ProductGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images.length) {
  return (
    <Box
      sx={{
        width: 450,
        height: 350,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "grey.100",
        borderRadius: 2,
        border: "1px solid",
        borderColor: "grey.300",
        color: "text.secondary",
      }}
    >
      <ImageNotSupportedOutlinedIcon sx={{ fontSize: 50, mb: 1 }} />
      <Typography variant="body1">
        No image available
      </Typography>
    </Box>
  );
}
  return (
    <Stack direction="row" spacing={2}>
      {/* Thumbnails */}
      <Stack spacing={1}>
        {images.map((src, index) => {
           const isSelected = index === selectedIndex;
           return(
          <Box
            key={src}
            component="img"
            src={src}
            alt={`${alt} - ${index + 1}`}
            onClick={() => setSelectedIndex(index)}
            sx={{
              width: 100,
              height: 100,
              objectFit: "cover",
              borderRadius: 1,
              cursor: "pointer",
              border: 1,
              borderColor: isSelected ? "common.black" : "grey.300",
            backgroundColor: isSelected ? "grey.100" : "grey.50",

            }}
          />
        );
})}
      </Stack>
      {/* Main image */}
      <Box
        component="img"
        src={images[selectedIndex]}
        alt={alt}
        sx={{
          flex: 1,
          maxWidth: 450,
          maxHeight: 350,
          objectFit: "contain",
          borderRadius: 1,

        }}
      />
    </Stack>
  );
};