/* eslint-disable react/prop-types */
import { Divider, Switch, Typography } from "@mui/material";
import {
  AutoSyncWrapper,
  ButtonWrapper,
  MessageCardWrapper,
  SyncDataSwitchWrapper,
} from "./AutoSync.Styles";
import RoundTick from "../../../../assets/icons/roundTick.svg";
const SyncDataWithSwitch = ({ syncData = [] }) => {
  return (
    <SyncDataSwitchWrapper>
      {syncData?.map((label, index) => {
        return (
          <div className="switch-and-label" key={index}>
            <Switch defaultChecked />
            <Typography variant="label">{label}</Typography>
            <span className="quest">?</span>
          </div>
        );
      })}
    </SyncDataSwitchWrapper>
  );
};

const MessageCard = ({ message, status = "success" }) => {
  return (
    <MessageCardWrapper status={status}>
      <img src={RoundTick} alt="round-tick" />
      <Typography variant="title2">{message}</Typography>{" "}
    </MessageCardWrapper>
  );
};

const AutoSync = ({syncData}) => {
  return (
    <AutoSyncWrapper>
      <Typography variant="mainTitle">AutoSync</Typography>
      <Divider sx={{border:"solid 1px #5F6B79"}} />
      <SyncDataWithSwitch syncData={syncData} />
      <MessageCard message="Auto Sync is Enabled" />
      <Typography variant="label" className="sub-text" component={"div"}>
        You can pause automatic syncing and resume back any time
      </Typography>
      <ButtonWrapper>
        <Typography variant="label">Stop Auto Sync</Typography>
      </ButtonWrapper>
    </AutoSyncWrapper>
  );
};

export default AutoSync;
