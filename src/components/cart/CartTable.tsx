import {
  Typography,
  Box,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import type { CartItem } from "../../types";
import QuantityStepper from "./QuantityStepper";

interface CartTableProps {
  items: CartItem[];
  onQuantityChange: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}

function CartTable({ items, onQuantityChange, onRemove }: CartTableProps) {
  console.log(items);
  return (
    <>
      <Divider />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ minWidth: 500 }}>Product Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.productId}>
              <TableCell sx={{ minWidth: 500 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    component="img"
                    src={item.thumbnail}
                    alt={item.title}
                    sx={{ width: 64, height: 64, objectFit: "cover" }}
                  />
                  <Box>
                    <Typography variant="body2">{item.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {`$${item.price}`}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell align="right">{`$${item.price}`}</TableCell>
              <TableCell align="center">
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <QuantityStepper
                    value={item.quantity}
                    onChange={(newQuantity) =>
                      onQuantityChange(item.productId, newQuantity)
                    }
                  />
                </Box>
              </TableCell>
              <TableCell align="right">{`$${item.price * item.quantity}`}</TableCell>
              <TableCell align="right">
                <IconButton
                  size="small"
                  onClick={() => onRemove(item.productId)}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default CartTable;
