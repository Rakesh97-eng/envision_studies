import { styled } from "@mui/system";
import { COLORS } from "../../../../themes/colors";

export const IntegrationOneWrapper = styled("div")({
  padding: "24px",
});

export const IntegrationHomeWrapper = styled("div")({
  padding: "35px",
  paddingTop: "40px",
  backgroundColor: COLORS.background.secondary,
  borderRadius: "15px",
  ".btn-container": {
    display: "flex",
    justifyContent: "end",
    paddingRight: "6.5vw",
    marginTop: "24px",
    ".btn-wrapper": {
      display: "flex",
      gap: "25px",

      ".btn": {
        padding: "12px 24px",
        backgroundColor: COLORS.background.skyBlue,
        color: COLORS.text.primary,
        borderRadius: "3px",
        cursor: "pointer",
      },
    },
  },
  img: {
    height: "80%",
    width: "80%",
    paddingTop: "18px",
  },
  ".homeimg": {
    textAlign: "center",
  },
});

export const HeaderTextWrapper = styled("div")({
  textAlign: "center",
  marginBottom: "25px",
  lineHeight: "1.5",
  color: COLORS.text.primary,
  ".orange-text": {
    color: COLORS.text.orange,
  },
  ".blue-text": {
    color: COLORS.text.blue,
  },
  ".green-text": {
    color: COLORS.text.lightGreen,
  },
});
