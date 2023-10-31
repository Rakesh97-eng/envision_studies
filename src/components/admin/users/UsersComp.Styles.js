import { styled } from "@mui/material";
import { COLORS } from "../../../themes/colors";

export const UserCompWrapper = styled("div")({
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
    flexDirection: "column",
    gap: 12,
    ".select-box": {
      display: "flex",
      gap: 24,
      alignItems: "center",
    },
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

export const CustomSwitchWrapper = styled("div")({
  ".Mui-checked+.MuiSwitch-track": {
    backgroundColor: `${COLORS.background.lightGreen} !important`,
  },
  ".Mui-checked": {
    color: `${COLORS.background.lightGreen} !important`,
  },
  ".MuiSwitch-track": {
    backgroundColor: "lightgray",
  },
});

export const ActionCreatorWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "5px",
  img: {
    height: "20px",
    width: "20px",
    cursor: "pointer",
  },
});
