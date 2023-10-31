import { styled } from "@mui/material";
import { COLORS } from "../../../themes/colors";

export const PaymentCompWrapper = styled("div")({
  color: COLORS.text.primary,
  ".MuiDivider-root": {
    margin: "24px",
    marginLeft: "0px",
    border: "2px solid #5F6B79",
  },
  ".export-cv": {
    padding: "8px 21px",
    backgroundColor: COLORS.background.darkYellow,
    width: "fit-content",
    height: "fit-content",
    borderRadius: 3,
    cursor: "pointer",
  },
  ".parent-container": {
    display: "flex",
    justifyContent: "space-between",
    paddingRight: "36px",
  },
  ".select-box-info": {
    display: "flex",
    gap: 12,
    alignItems:'center',
  },
  ".search-box-btn": {
    display: "flex",
    alignItems: "end",
    gap: 24,
  },
  ".table-wrapper": {
    marginRight: "24px",
  },
  
});

