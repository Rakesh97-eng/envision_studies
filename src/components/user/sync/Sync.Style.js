import { styled } from "@mui/system";
import { COLORS } from "../../../themes/colors";

export const CustomLabelWrapper = styled("div")({
  display: "flex",
  gap: 14,
  alignItems: "center",
  ".count": {
    height: 30,
    width: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    backgroundColor: COLORS.background.scandal,
    fontWeight: 600,
    color: COLORS.text.black,
  },
});

export const TabWrapper = styled("div")({
  ".MuiTabs-indicator": {
    display: "none",
  },

  "& .Mui-selected": {
    backgroundColor: COLORS.background.secondary,
    borderRadius: "10px 10px 0px 0px",
    color: `${COLORS.text.gray} !important`,
    fontWeight: 700,
  },

  ".MuiButtonBase-root": {
    color: COLORS.text.gray,
    fontWeight: 700,
  },
});

export const CustomTabPanelWrapper = styled("div")({
  backgroundColor: COLORS.background.secondary,
  borderRadius: "0px 10px 10px 10px",
});
