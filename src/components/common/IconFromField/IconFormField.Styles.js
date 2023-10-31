import { styled } from "@mui/material";
import { COLORS } from "../../../themes/colors";

export const IConFormFieldContainer = styled("div")({
  ".field-paper": {
    display: "flex",
    alignItems: "center",
    border: "1px solid",
    borderColor: COLORS.border.darkGray,
    borderRadius: "6px",
    boxShadow: "none",
    backgroundColor: "#323E4A",
  },
  ".MuiInputBase-root": {
    padding: "8px 12px",
  },
  ".MuiOutlinedInput-input": {
    color: COLORS.text.primary,
    padding: "12px 14px",
  },
  ".MuiOutlinedInput-input:focus": {
    color: COLORS.text.primary,
  },
  ".MuiOutlinedInput-root ::placeholder": {
    color: COLORS.text.primary,
  },
});
