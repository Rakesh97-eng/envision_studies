import { styled } from "@mui/system";
import { COLORS } from "../../../themes/colors";

export const TitleBarWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: 24,
  color: COLORS.text.primary,
  ".first-part": {
    display: "flex",
    alignItems: "center",
    gap: 20,
  },
  ".text-part": {
    maxWidth: "540px",
    display: "flex",
    flexDirection:'column',
     gap:5,
  },
  ".second-part": {
    width: "10%",
  },
  ".secondimg": {
    width: "100%",
    objectFit: "contain",
  },
  ".subtext-part":{
    "& .MuiTypography-root":{
      fontSize:"17px !important"
    }
  }
});
