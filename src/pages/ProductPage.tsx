import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Alert, Box, CircularProgress, Container } from "@mui/material";
import { getProductById } from "../services/productService";
import type { Product as ProductType } from "../types";

import { ProductGallery } from "../components/product/ProductGallery";
import { ProductInfo } from "../components/product/ProductInfo";
import { ProductMeta } from "../components/product/ProductMeta";
import { ProductTabs } from "../components/product/ProductTabs";

function Product() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    
    let isMounted = true;
    const fetchProduct = async () => {
      setLoading(true);
      const result = await getProductById(id);
      if (isMounted) {
        setProduct(result);
        setLoading(false);
      }
    };

    fetchProduct();

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) {
    return (
      <Box sx= {{display:"flex", justifyContent:"center", mt:4}}>
        <CircularProgress />
      </Box>
    );
  }

  if (!product) {
    return(
     <Container sx={{ py: 4 }}>
      <Alert severity="error">
             Product not found
      </Alert>
    </Container>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      alignItems: {xs: "center", md: "stretch"},
      gap: 4,
    }}
  >
    <Box sx={{ flex: 1 }}>
      <ProductGallery
        images={product.images}
        alt={product.title}
      />
    </Box>

    <Box sx={{ flex: 1 }}>
      <ProductInfo product={product} />
      <ProductMeta product={product} />
    </Box>
  </Box>
  <Box sx={{ width: { xs: "100%", md: "70%" },
    mx: "auto"}}>
  <ProductTabs product={product} />
  </Box>
</Container>
  );
}

export default Product;