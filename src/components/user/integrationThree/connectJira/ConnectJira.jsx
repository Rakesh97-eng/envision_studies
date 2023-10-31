import { Divider, Grid, Typography } from "@mui/material";
import TitleBar from "../../../common/customTitleBar/TitleBar";
import StepperCard from "../../../common/customStepperCard/StepperCard";
import { IntegrationOneStepper2, IntegrationThreeStepper3 } from "../../../../utils/constants/StepperText";
import jira from "../../../../assets/images/jira.png";
import jirasmall from "../../../../assets/images/jira-small.png";
import jiralogo from "../../../../assets/images/jira-logo.png";
import { ConnectJiraWrapper, FormCardWrapper } from "./ConnectJira.Styles";
import Info from "../../../../assets/icons/info.svg";
import IconFormField from "../../../common/IconFromField/IconFormField";

const SubText = () => {
  return (
    <Typography variant="title3Regular">
      Follow the instructions to begin linking your
      <Typography variant="title2"> Jira </Typography> account to
      <Typography variant="title2"> envisionLXPJ</Typography>
    </Typography>
  );
};

const titleBarData = {
  leftImage: jiralogo,
  rightImage: jira,
  title: "Link Jira Account",
  SubText: SubText,
};

const RightSideCard = ({ChangeTab,Jiradoc}) => {
  return (
    <FormCardWrapper>
      <IconFormField
        placeholder="Jira Administrator Email"
        iconSrc={Info}
        isIconRight={true}
        toolTipContent={"Note*  The user must have advisor access level"}
      />
      <div className="action-btn" onClick={()=>ChangeTab(Jiradoc)}>
        <img src={jirasmall} />
        <Typography>Connect To Jira</Typography>
      </div>
    </FormCardWrapper>
  );
};

const ConnectJira = ({ChangeTab,Jiradoc}) => {
  return (
    <ConnectJiraWrapper>
      <TitleBar titleBarData={titleBarData} />
      <Divider sx={{border:"solid 1px #5F6B79"}}/>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <StepperCard stepperData={IntegrationThreeStepper3} />
        </Grid>
        <Grid item xs={6}>
          <RightSideCard ChangeTab={ChangeTab} Jiradoc={Jiradoc} />
        </Grid>
      </Grid>
    </ConnectJiraWrapper>
  );
};
export default ConnectJira;
