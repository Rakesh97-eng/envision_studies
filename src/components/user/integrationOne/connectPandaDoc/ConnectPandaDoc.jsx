import { Divider, Grid, Typography } from "@mui/material";
import TitleBar from "../../../common/customTitleBar/TitleBar";
import { IntegrationOneStepper2 } from "../../../../utils/constants/StepperText";
import pandadoc from "../../../../assets/images/panda-doc.png";
import pandadocsmall from "../../../../assets/images/panda-doc-small.png";
import pandadoclogo from "../../../../assets/images/panda-doc-logo.png";
import {
  ConnectPandaDocWrapper,
  FormCardWrapper,
} from "./ConnectPandaDoc.Styles";
import FormField from "../../../common/FormField/FormField";
import StepperCard from "../../../common/customStepperCard/StepperCard";


const SubText = () => {
  return (
    <Typography variant="title3Regular" >
      Follow the instructions to begin linking your
      <Typography variant="title2"> PandaDoc </Typography> account to
      <Typography variant="title2"> envisionLXPJ</Typography>
    </Typography>
  );
};

const titleBarData = {
  leftImage: pandadoc,
  rightImage: pandadoclogo,
  title: "Link PandaDoc Account",
  SubText: SubText,
};

const RightSideCard = ({ChangeTab,PandaDocValue}) => {
  return (
    <FormCardWrapper>
      <FormField placeholder="PandaDoc Account Manager Email" />
      <div className="action-btn" onClick={()=>ChangeTab(PandaDocValue)}>
        <img src={pandadocsmall} style={{width:"35px",height:"35px"}} />
        <Typography>Connect To PandaDoc</Typography>
      </div>
    </FormCardWrapper>
  );
};

const ConnectPandaDoc = ({ChangeTab,PandaDocValue}) => {
  return (
    <ConnectPandaDocWrapper>
      <TitleBar titleBarData={titleBarData} />
      <Divider sx={{border:"solid 1px #5F6B79"}}/>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <StepperCard stepperData={IntegrationOneStepper2} />
        </Grid>
        <Grid item xs={6}>
          <RightSideCard ChangeTab={ChangeTab} PandaDocValue={PandaDocValue}/>
        </Grid>
      </Grid>
    </ConnectPandaDocWrapper>
  );
};
export default ConnectPandaDoc;
