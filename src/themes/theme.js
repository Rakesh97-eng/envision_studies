import { createTheme } from "@mui/material";
import { COLORS } from "./colors";

export const theme = createTheme({
  palette: COLORS,
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    mainTitle: {
      fontSize: 22,
      fontWeight: 700,
    },
    mainTitle1: {
      fontSize: 28,
      fontWeight: 700,
    },
    label: {
      fontSize: 14,
      fontWeight: 600,
    },
    label2: {
      fontSize: 16,
      fontWeight: 700,
    },
    title2: {
      fontSize: 18,
      fontWeight: 700,
    },
    title2Regular: {
      fontSize: 20,
      fontWeight: 400,
    },
    title3Regular: {
      fontSize: 20,
      fontWeight: 500,
    },
  },
});
