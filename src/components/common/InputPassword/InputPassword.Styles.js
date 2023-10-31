import { styled } from "@mui/material";
import { COLORS } from "../../../themes/colors";

export const PasswordFieldWrapper = styled("div")({
  minWidth: "252px",
  width: "300px",
  ".MuiOutlinedInput-notchedOutline": {
    borderColor: `${COLORS.border.darkGray} !important`,
  },
  ".MuiOutlinedInput-input": {
    color: COLORS.text.primary,
    padding:'12px 14px',
  },
  ".MuiOutlinedInput-input:focus": {
    borderColor: COLORS.border.darkGray,
    color: COLORS.text.primary,
  },
  svg: {
    color: COLORS.text.primary,
  },
  ".MuiFormControl-root": {
    width: "100%",
  },
  ".MuiOutlinedInput-root ::placeholder": {
    color: COLORS.text.primary,
  },
});
