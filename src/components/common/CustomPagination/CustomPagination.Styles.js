import { styled } from "@mui/material";
import { COLORS } from "../../../themes/colors";

export const CustomPaginationWrapper = styled("div")({
  margin: "12px",
  ".MuiToolbar-root": {
    display: "flex",
    alignItems: "baseline",
  },
  ".MuiSelect-icon": {
    color: "#fff",
  },
  ".MuiMenu-list": {
    backgroundColor: COLORS.background.primary,
  },
});
