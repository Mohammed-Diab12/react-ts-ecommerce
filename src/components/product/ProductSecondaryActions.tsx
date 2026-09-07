import { IconButton, Stack } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

export const ProductSecondaryActions = () => {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton
        sx={{ border: "1px solid",
             borderColor: "divider",
              borderRadius: 1
            }}
      >
        <FavoriteBorderIcon fontSize="small" />
      </IconButton>

      <IconButton
        sx={{ border: "1px solid",
             borderColor: "divider",
              borderRadius: 1
            }}
      >
        <CompareArrowsIcon fontSize="small" />
      </IconButton>
    </Stack>
  );
};