import { styled } from "@mui/system";
import { COLORS } from "../../../../themes/colors";

export const IntegrationThreeWrapper = styled("div")({
  padding: "24px",
});

export const IntegrationHomeWrapper = styled("div")({
  padding: "35px",
  paddingTop: "35px",
  backgroundColor: COLORS.background.secondary,
  borderRadius: "15px",
  ".btn-container": {
    display: "flex",
    justifyContent: "end",
    paddingRight: "6vw",
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
    width: "81%",
    paddingTop: "15px",
  },
  ".homeimg": {
    textAlign: "center",
  },
});

export const HeaderTextWrapper = styled("div")({
  textAlign: "center",
  marginBottom: "30px",
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
