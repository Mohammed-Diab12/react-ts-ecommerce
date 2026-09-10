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
import { formatPrice } from "../cart/utils";

interface CartTableProps {
  items: CartItem[];
  onQuantityChange: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}

function CartTable({ items, onQuantityChange, onRemove }: CartTableProps) {
  return (
    <>
      <Divider />
      <Box
        sx={{
          width: "100%",
          overflowX: "auto",
        }}
      >
        <Table
          sx={{
            minWidth: { xs: 650, md: "100%" },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ minWidth: { xs: 250, md: 300 }, color: "content.main" }}
              >
                Product Name
              </TableCell>

              <TableCell align="right" sx={{ color: "content.main" }}>
                Price
              </TableCell>

              <TableCell align="center" sx={{ color: "content.main" }}>
                Quantity
              </TableCell>

              <TableCell align="right" sx={{ color: "content.main" }}>
                Total
              </TableCell>

              <TableCell />
            </TableRow>
          </TableHead>

          <TableBody>
            {items.map((item) => (
              <TableRow key={item.productId}>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Box
                      component="img"
                      src={item.thumbnail}
                      alt={item.title}
                      sx={{
                        width: 64,
                        height: 64,
                        objectFit: "cover",
                        flexShrink: 0,
                      }}
                    />

                    <Box sx={{ minWidth: 0, color: "content.main" }}>
                      <Typography
                        variant="body2"
                        sx={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          maxWidth: { xs: 180, sm: 250 },
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography variant="body2" color="text.secondary">
                        {formatPrice(item.price)}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>

                <TableCell align="right">{formatPrice(item.price)}</TableCell>

                <TableCell align="center">
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <QuantityStepper
                      maxQuantity={item.stock}
                      value={item.quantity}
                      onChange={(newQuantity) =>
                        onQuantityChange(item.productId, newQuantity)
                      }
                    />
                  </Box>
                </TableCell>

                <TableCell align="right">
                  {formatPrice(item.price * item.quantity)}
                </TableCell>

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
      </Box>
    </>
  );
}

export default CartTable;
