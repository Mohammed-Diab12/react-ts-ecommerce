import { useState, useEffect } from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { getProductById } from "../../services/productService";

interface QuantityStepperProps {
  productId: string;
  value: number;
  onChange: (newValue: number) => void;
  min?: number;
}

const QuantityStepper = ({
  productId,
  value,
  onChange,
  min = 1,
}: QuantityStepperProps) => {
  const [maxQuantity, setMaxQuantity] = useState<number | undefined>(undefined);

  useEffect(() => {
    let isMounted = true;

    const fetchStock = async () => {
      const product = await getProductById(productId);
      if (isMounted) {
        setMaxQuantity(product?.stock ?? 0);
      }
    };
    fetchStock();
    return () => {
      isMounted = false;
    };
  }, [productId]);

  const handleDecrease = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrease = () => {
    onChange(value + 1);
  };

  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 1,
        width: "fit-content",
        alignItems: "center",
      }}
    >
      <IconButton size="small" onClick={handleDecrease} disabled={value <= min}>
        <RemoveIcon fontSize="small" />
      </IconButton>
      <Typography sx={{ minWidth: 20, textAlign: "center" }}>
        {value}
      </Typography>
      <IconButton
        size="small"
        onClick={handleIncrease}
        disabled={maxQuantity !== undefined && value >= maxQuantity}
      >
        <AddIcon fontSize="small" />
      </IconButton>
    </Stack>
  );
};

export default QuantityStepper;