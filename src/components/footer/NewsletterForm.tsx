import { Box, Typography, Paper, TextField, Button } from "@mui/material";
import { useState } from "react";
function NewsletterForm() {
  const [inputvalue, setInputValue] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    console.log(email);
    setInputValue("");
  };
  return (
    <Paper sx={{ textAlign: "center", py: 4, pb: 5 }}>
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
        NewsLetter
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        Subscribe to receive coupons and gift cards
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mt: 4,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          px: 2,
          flexWrap: "wrap",
        }}
      >
        <TextField
          id="email"
          name="email"
          type="email"
          label="Email address"
          variant="outlined"
          value={inputvalue}
          sx={{
            backgroundColor: "background.default",
            minWidth: { xs: "100%", sm: "40%" },
          }}
          slotProps={{
            input: {
              sx: {
                height: 45,
              },
            },
          }}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          autoComplete="on"
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            fontWeight: 700,
            px: 6,
            borderRadius: 0,
            height: 45,
          }}
        >
          SUBSCRIBE
        </Button>
      </Box>
    </Paper>
  );
}

export default NewsletterForm;
