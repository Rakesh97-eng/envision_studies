import { styled } from "@mui/system";

export const CustomCardWrapper = styled("div")({
  ".cardcontainer": { minWidth: 275, backgroundColor: "#3E4B5C", width: "100%",borderRadius:"10px" },
  ".childcard": {
    color: "white",
    fontSize: "32px",
    fontWeight: "bold",
    width: "90%",
    backgroundColor: "#635BFF",
    height: "100px",
    margin: "5% 5% 0px 5%",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  ".cardText": {
    fontSize: 14,
    color: "white",
    verticalAlign: "middle",
    display: "inline-flex",
  },
  ".cardcontent": {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    width: "100%",
    justifyContent: "center",
    alignContent: "flex-start",
  },
});
