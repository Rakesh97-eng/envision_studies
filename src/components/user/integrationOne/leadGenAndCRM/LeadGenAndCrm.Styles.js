import { styled } from "@mui/material";
import { COLORS } from "../../../../themes/colors";

export const LeadGenAndCrmWrapper = styled("div")({
  ".MuiDivider-root": {
    margin: "24px",
    borderColor: "#5F6B79",
  },
  ".wrapper": {
    margin: "24px 0px",
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
    padding: "10px",
    backgroundColor: COLORS.background.secondary,
    width: "fit-content",
    cursor: "pointer",
    color: COLORS.text.primary,
    borderRadius: "3px",
  },
});
