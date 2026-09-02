import { Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";

function CartPage() {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ backgroundColor: "red" }}>
        <Typography variant="h4" color="" sx={{ textAlign: "center" }}>
          Shopping Cart
        </Typography>
      </Container>
    </Box>
  );
}

export default CartPage;
