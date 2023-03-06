import { Box, Button } from "@mui/material";
import { useState } from "react";
import Staff from "./pages/Staff";
import Meetings from "./pages/Meetings";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

type Pages = "staff" | "meetings";

function App() {
  const [page, setPage] = useState<Pages>("staff");

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box display="flex" flexDirection="column" gap={2} padding="10px 10px">
        <Box display="flex" gap={2} justifyContent="center">
          <Button
            sx={{ width: 130 }}
            variant="contained"
            onClick={() => setPage("staff")}
          >
            Сотрудники
          </Button>
          <Button
            sx={{ width: 130 }}
            variant="contained"
            onClick={() => setPage("meetings")}
          >
            Встречи
          </Button>
        </Box>

        {page === "staff" && <Staff />}
        {page === "meetings" && <Meetings />}
      </Box>
    </ThemeProvider>
  );
}

export default App;
