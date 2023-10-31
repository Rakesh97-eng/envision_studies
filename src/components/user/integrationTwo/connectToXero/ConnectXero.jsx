import { Divider, Grid, Typography } from "@mui/material";
import TitleBar from "../../../common/customTitleBar/TitleBar";
import StepperCard from "../../../common/customStepperCard/StepperCard";
import { IntegrationOneStepper2, IntegrationTwoStepper2 } from "../../../../utils/constants/StepperText";
import xero from "../../../../assets/images/xero.png";
import xerosmall from "../../../../assets/images/xero-small.png";
import xerodoclogo from "../../../../assets/images/xero-logo.png";
import { ConnectXeroWrapper } from "./ConnectXero.Styles";
import { FormCardWrapper } from "./ConnectXero.Styles";
import IconFormField from "../../../common/IconFromField/IconFormField";
import Info from "../../../../assets/icons/info.svg";

const SubText = () => {
  return (
    <Typography variant="title3Regular">
      Follow the instructions to begin linking your
      <Typography variant="title2"> Xero </Typography> account to
      <Typography variant="title2"> envisionLXPJ</Typography>
    </Typography>
  );
};
const titleBarData = {
  leftImage: xerodoclogo,
  rightImage: xero,
  title: "Link Xero Account",
  SubText: SubText,
};

const RightSideCard = ({ChangeTab,XeroValue}) => {
  return (
    <FormCardWrapper>
      <IconFormField
        placeholder="Xero Admin User Email"
        iconSrc={Info}
        isIconRight={true}
        toolTipContent={"Note*  The user must have advisor access level"}
      />
      <div className="action-btn" onClick={()=>ChangeTab(XeroValue)}>
        <img src={xerosmall} />
        <Typography>Connect To Xero</Typography>
      </div>
    </FormCardWrapper>
  );
};

const ConnectXero = ({ChangeTab,XeroValue}) => {
  return (
    <ConnectXeroWrapper>
      <TitleBar titleBarData={titleBarData} />
      <Divider sx={{border:"solid 1px #5F6B79"}}/>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <StepperCard stepperData={IntegrationTwoStepper2} />
        </Grid>
        <Grid item xs={6}>
          <RightSideCard XeroValue={XeroValue} ChangeTab={ChangeTab} />
        </Grid>
      </Grid>
    </ConnectXeroWrapper>
  );
};
export default ConnectXero;
