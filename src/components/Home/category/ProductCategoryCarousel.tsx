import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  CircularProgress,
  Container,
  Divider,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { getProductsByCategories } from "../../../services/productService";
import ProductCard from "../ProductCard";
import type { Product } from "../../../types";

const CARD_GAP = 10;

const SWIPER_MODULES = [Pagination];

const CAROUSEL_BREAKPOINTS = {
  0: { slidesPerView: 2, slidesPerGroup: 2 },
  600: { slidesPerView: 3, slidesPerGroup: 3 },
  900: { slidesPerView: 4, slidesPerGroup: 4 },

  1200: { slidesPerView: 5, slidesPerGroup: 5 },
};

const PAGINATION_CONFIG = { clickable: true };

interface ProductCategoryCarouselProps {
  categoryTitle: string;
  categories: Product["category"][];
}

function ProductCategoryCarousel({
  categoryTitle,
  categories,
}: ProductCategoryCarouselProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(false);

      try {
        const data = await getProductsByCategories(categories);
        setProducts(data);
      } catch (error) {
        console.error(`Failed to fetch ${categoryTitle} products:`, error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categories, categoryTitle]);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
        <CircularProgress size={28} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ py: 4, textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary">
          Couldn't load {categoryTitle} products. Please try again later.
        </Typography>
      </Box>
    );
  }

  if (!products.length) {
    return null;
  }

  return (
    <Container maxWidth="lg">
      {/* Title */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {categoryTitle}
        </Typography>

        <Box sx={{ width: 115, height: 3, bgcolor: "error.main", mt: 0.5 }} />
      </Box>
      {/* Products */}
      <Box
        role="region"
        aria-label={`${categoryTitle} products`}
        sx={{
          mt: 5,

          pb: 4,
          "& .swiper-pagination-bullet": {
            backgroundColor: "content.main",
            opacity: 1,
            borderRadius: 0,
            width: 24,
            height: 4,
          },
          "& .swiper-pagination-bullet-active": {
            backgroundColor: "error.main",
            height: 5,
          },
        }}
      >
        <Swiper
          modules={SWIPER_MODULES}
          spaceBetween={CARD_GAP}
          pagination={PAGINATION_CONFIG}
          breakpoints={CAROUSEL_BREAKPOINTS}
        >
          {products.map((product, index) => (
            <SwiperSlide key={product.id} style={{ height: "auto" }}>
              <Box
                sx={{
                  display: "flex",
                  height: "100%",
                }}
              >
                <ProductCard
                  id={product.id}
                  category={product.category}
                  thumbnail={product.thumbnail}
                  title={product.title}
                  price={product.price}
                  discountPercentage={product.discountPercentage}
                />

                {index < products.length - 1 && (
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ height: "60%" }}
                  />
                )}
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
}

export default ProductCategoryCarousel;
