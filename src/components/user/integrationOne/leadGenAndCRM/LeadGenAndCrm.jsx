import { Divider, Grid, Typography } from "@mui/material";
import TitleBar from "../../../common/customTitleBar/TitleBar";
import StepperCard from "../../../common/customStepperCard/StepperCard";
import { IntegrationOneStepper1 } from "../../../../utils/constants/StepperText";
import gencrm from "../../../../assets/images/gen-crm.png";
import gencrmsmall from "../../../../assets/images/gen-crm-small.png";
import gencrmlogo from "../../../../assets/images/cctt.png";
import { FormCardWrapper, LeadGenAndCrmWrapper } from "./LeadGenAndCrm.Styles";
import FormField from "../../../common/FormField/FormField";
import InputPassword from "../../../common/InputPassword/InputPassword";

const SubText = () => {
  return (
    <Typography variant="title3Regular">
      Follow the instructions to begin linking your
      <Typography variant="title2"> Lead Gen & CRM </Typography> account to
      <Typography variant="title2"> envisionLXPJ</Typography>
    </Typography>
  );
};
const titleBarData = {
  leftImage: gencrm,
  rightImage: gencrmlogo,
  title: "Link Lead Gen & CRM Account",
  SubText: SubText,
};

const RightSideCard = ({ChangeTab,LeadDocValue}) => {
  return (
    <FormCardWrapper>
      <FormField placeholder="Username" />
      <InputPassword placeholder="Password" />
      <div className="action-btn"  onClick={()=>ChangeTab(LeadDocValue)}>
        <img src={gencrmsmall} style={{width:"35px",height:"35px"}} />
        <Typography>Connect To Lead Gen & CRM</Typography>
      </div>
    </FormCardWrapper>
  );
};
const LeadGenAndCrm = ({ChangeTab,LeadDocValue}) => {
  return (
    <LeadGenAndCrmWrapper>
      <TitleBar titleBarData={titleBarData} />
      <Divider sx={{border:"solid 1px #5F6B79"}} />
      <Grid container spacing={1} className="wrapper">
        <Grid item xs={6}>
          <StepperCard stepperData={IntegrationOneStepper1} />
        </Grid>
        <Grid item xs={6}>
          <RightSideCard LeadDocValue={LeadDocValue} ChangeTab = {ChangeTab} />
        </Grid>
      </Grid>
    </LeadGenAndCrmWrapper>
  );
};
export default LeadGenAndCrm;
