import { IconButton, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface QuantityStepperProps {
  value: number;
  onChange: (newValue: number) => void;
  min?: number;
}

const QuantityStepper = ({
  value,
  onChange,
  min = 1,
}: QuantityStepperProps) => {
  const handleDecrease = () => {
    onChange(value - 1);
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
      <IconButton size="small" onClick={handleIncrease}>
        <AddIcon fontSize="small" />
      </IconButton>
    </Stack>
  );
};

export default QuantityStepper;
