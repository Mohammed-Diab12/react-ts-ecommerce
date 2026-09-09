import { IconButton, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface QuantityStepperProps {
  value: number;
  onChange: (newValue: number) => void;
  min?: number;
  maxQuantity?: number;
}

const QuantityStepper = ({
  value,
  onChange,
  min = 1,
  maxQuantity,
}: QuantityStepperProps) => {
  const handleDecrease = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrease = () => {
    if (maxQuantity !== undefined && value >= maxQuantity) {
      return;
    }
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
