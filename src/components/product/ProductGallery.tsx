import { useState } from "react";
import { Box, Stack } from "@mui/material";

export interface ProductGalleryProps {
  images: string[];
  alt: string;
}

export const ProductGallery = ({ images, alt }: ProductGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (images.length === 0) {
    return null;
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
              border: "1px solid",
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