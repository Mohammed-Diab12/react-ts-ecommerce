import { useState } from "react";
import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import type { Product } from "../../types";

export interface ProductTabsProps {
  product: Product;
}

export const ProductTabs = ({ product }: ProductTabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box>
      <Tabs
        value={activeTab}
        onChange={(_, newValue) => setActiveTab(newValue)}
        centered
      >
        <Tab label="DETAILS" />
        <Tab label="MORE INFORMATION" />
        <Tab label="REVIEWS" />
      </Tabs>

      <Divider />

      <Box sx={{ mt: 3 }}>
        {activeTab === 0 && <Typography variant="body1"
        sx={{color: "text.primary", fontSize: "0.875rem",
              lineHeight: 1.7 }}>
        {product.description}
        </Typography>}
        {activeTab === 1 && (
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            No additional information available.
          </Typography>
        )}
        {activeTab === 2 && (
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            No reviews yet.
          </Typography>
        )}
      </Box>
    </Box>
  );
};