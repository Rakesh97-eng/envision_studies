import { styled } from "@mui/system";
import { COLORS } from "../../../../themes/colors";

export const AutoSyncWrapper = styled("div")({
  color: COLORS.text.primary,
  ".MuiDivider-root": {
    borderColor: COLORS.border.darkGray,
    margin: "24px 0px",
  },
  '.sub-text':{
    margin: "24px 0px",
  }
});
export const SyncDataSwitchWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  paddingBottom: "32px",
  ".Mui-checked": {
    color: `${COLORS.background.lightGreen} !important`,
  },
  ".Mui-checked+.MuiSwitch-track": {
    backgroundColor: `${COLORS.background.lightGreen} !important`,
  },
  ".switch-and-label": {
    display: "flex",
    gap: 10,
    alignItems: "center",
  },
  ".quest": {
    height: 20,
    width: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    backgroundColor: COLORS.background.white,
    fontWeight: 600,
    color: COLORS.text.black,
  },
});

export const MessageCardWrapper = styled("div")((props) => ({
  display: "flex",
  alignItems: "center",
  gap: "14px",
  padding: "17px 20px",
  backgroundColor: `${
    props.status == "success" ? COLORS.background.lightGreen : "red"
  }`,
  borderRadius: "5px",
}));

export const ButtonWrapper=styled('div')({
    marginTop: "10px",
    padding:'12px 29px',
    backgroundColor:COLORS.background.lightGray,
    width:'fit-content',
    borderRadius: "3px",
    cursor: "pointer",
})