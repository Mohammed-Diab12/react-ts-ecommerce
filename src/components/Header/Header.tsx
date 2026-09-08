import { ThemeToggleButton } from "../themeToggleButton/ThemeToggleButton";
import { Container, Stack, Typography,Box } from "@mui/material";
import {HeaderActions} from "../headerAction/HeaderAction";
function Header() {
  return <Container>
  <Stack direction="row" spacing={2} sx={{ justifyContent: "space-between", alignItems: "center", py: 2 }}>
    <Typography variant="h2" sx={{ fontWeight: 600, fontSize: "1.9rem", color: "text.primary" }}>
      CAMARO
    </Typography>
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
         <ThemeToggleButton />
          <HeaderActions />

    </Box>
  </Stack>
  </Container>;
}

export default Header;