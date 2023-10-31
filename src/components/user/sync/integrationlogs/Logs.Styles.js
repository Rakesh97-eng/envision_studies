import { styled } from "@mui/material";
import { COLORS } from "../../../../themes/colors";

export const IntegrationLogsWrapper = styled("div")({
  color: COLORS.text.primary,
  ".MuiDivider-root": {
    borderColor: COLORS.border.darkGray,
    margin: "24px 0px",
    borderWidth: "2px",
  },
  ".sub-text": {
    margin: "24px 0px",
  },
  ".search-box": {
    margin: "24px 0px",
    display: "flex",
    justifyContent: "space-between",
  },
});

export const SyncDetailsWrapper = styled("div")({
  marginBottom: 12,
  td: {
    padding: "10px 20px",
  },
});
