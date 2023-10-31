import { styled } from "@mui/material";
import { COLORS } from "../../../../themes/colors";

export const ConnectJiraWrapper = styled("div")({
  ".MuiDivider-root": {
    margin: "24px",
    borderColor: "#5F6B79",
  },
});

export const FormCardWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  ".action-btn": {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    padding: "10px 12px",
    backgroundColor: COLORS.background.secondary,
    width: "fit-content",
    cursor: "pointer",
    color: COLORS.text.primary,
    borderRadius: "3px",
  },
});
