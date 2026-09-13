import { useCallback, useEffect, useRef, useState } from "react";
import {Box, Typography, IconButton, Stack, CircularProgress,} from "@mui/material";
import { getProductsByCategories } from "../../../services/productService";
import type { Product } from "../../../types";

const CATEGORY_TITLE = "Smartphone & Tablet";
const CATEGORIES: Product["category"][] = ["Smartphone", "Tablet"];
const CARD_WIDTH = 180;
const CARD_GAP = 10;

function MobileDevicesCategory() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeDot, setActiveDot] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetched = await getProductsByCategories(CATEGORIES);
        setProducts(fetched);
      } catch (err) {
        console.error(`Failed to fetch ${CATEGORY_TITLE} products:`, err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const recalculatePageCount = useCallback(() => {
    const el = scrollRef.current;

    if (!el || el.clientWidth === 0) return;

    const newPageCount = Math.max(1, Math.ceil(el.scrollWidth / el.clientWidth));

    setPageCount(newPageCount);
    setActiveDot((currentIndex) => Math.min(currentIndex, newPageCount - 1));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;

    if (!el) return;

    recalculatePageCount();

    const resizeObserver = new ResizeObserver(recalculatePageCount);
    resizeObserver.observe(el);

    return () => {
      resizeObserver.disconnect();
    };
  }, [recalculatePageCount]);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;

    if (!el || el.clientWidth === 0) return;

    const index = Math.round(el.scrollLeft / el.clientWidth);
    setActiveDot(index);
  }, []);

  const scrollToPage = useCallback((index: number) => {
    const el = scrollRef.current;

    if (!el) return;

    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  }, []);

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
          Couldn't load {CATEGORY_TITLE} products. Please try again later.
        </Typography>
      </Box>
    );
  }

  if (products.length === 0) {
    return null;
  }

  return (
    <Box sx={{ width: "100%", py: 3 }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {CATEGORY_TITLE}
        </Typography>

        <Box sx={{ width: 40, height: 3, bgcolor: "error.main", mt: 0.5 }} />
      </Box>

      <Box
        ref={scrollRef}
        onScroll={handleScroll}
        role="region"
        aria-label={`${CATEGORY_TITLE} products`}
        sx={{
          display: "flex",
          gap: `${CARD_GAP}px`,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
        }}
      >
        {products.map((product) => (
          <Box
            key={product.id}
            sx={{
              scrollSnapAlign: "start",
              minWidth: CARD_WIDTH,
              flex: "0 0 auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              p: 1,
              border: "1px dashed",
              borderColor: "divider",
            }}
          >
            {/* Temporary product card */}
            <Box
              component="img"
              src={product.thumbnail}
              alt={product.title}
              sx={{ width: "100%", height: 140, objectFit: "contain", mb: 1 }}
            />

            <Typography variant="body2">{product.title}</Typography>

            <Typography variant="body2" sx={{ color: "error.main" }}>
              ${product.price}
            </Typography>
          </Box>
        ))}
      </Box>

      {pageCount > 1 && (
        <Stack direction="row" spacing={1} sx={{ justifyContent: "center", mt: 2 }}>
          {Array.from({ length: pageCount }).map((_, index) => (
            <IconButton
              key={index}
              size="small"
              onClick={() => scrollToPage(index)}
              aria-label={`Go to page ${index + 1}`}
              aria-current={activeDot === index ? "true" : undefined}
              sx={{ p: 0.5 }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: activeDot === index ? "error.main" : "grey.400",
                  transition: "background-color 0.2s",
                }}
              />
            </IconButton>
          ))}
        </Stack>
      )}
    </Box>
  );
}

export default MobileDevicesCategory;