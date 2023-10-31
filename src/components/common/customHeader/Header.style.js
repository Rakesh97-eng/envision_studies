import { styled } from "@mui/system";
import { COLORS } from "../../../themes/colors";

export const HeaderWrapper = styled("div")({
  ".HeaderBox": {
    borderBottom: 1,
    borderBottomWidth: "5px",
    borderColor: "divider",
    borderRadius: "10px",
    backgroundColor: "#3E4B5C",
    display: "flex",
    justifyContent: "space-between",
    fontsize: "50px",
    padding: "0px 5px 0px 0px",
  },

  ".boxicon": {
    fontSize: "70px",
    color: "#A0A7B1",
    width:"51px"
  },
  ".indicatorStyle": {
    backgroundColor: "#DC922D",
    height: "5px",
    borderRadius: "5px",
  },
  // ".childtab": {
  //   color: "#A0A7B1",
   
  // },
  ".childtabcomplete": {
    backgroundColor: "#DC922D",
    color: "white",
    fontWeight: "600",
    fontSize: "14.5px",
    borderRadius:"4px",
    marginRight:"1px",
    height:"100%",
    '&.Mui-selected':{
      color: "white",
    }

  },
 ".childtab":{
    color: "#A0A7B1",
    fontWeight: "600",
    fontSize: "14.5px",
   '&.Mui-selected':{
     color:COLORS.background.skyBlue,
  }, 

 }
});
