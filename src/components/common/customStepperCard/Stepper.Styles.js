import { styled } from "@mui/material";
import { COLORS } from "../../../themes/colors";

export const StepperCardWrapper = styled("div")({
  ".link-comp": {
    margin: "12px",
    padding: "12px",
    backgroundColor: COLORS.background.primary,
    borderRadius: "3px",
    ".red-text": {
      color: COLORS.text.red,
    },
  },
  // ".Mui-active": {
  //   fontWeight: "750",
  //   fontSize: "17px",
  // },

 ".stepper-label":{
     ".Mui-active": {
    fontWeight: "750",
    fontSize: "17px",
    color:"white",
  },
 
  ".MuiStepIcon-root": {
    color:COLORS.background.skyBlue,
    fontSize:"22px !important",
   
  },
 }
});
