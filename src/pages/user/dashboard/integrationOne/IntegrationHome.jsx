/* eslint-disable react/prop-types */
import {
  HeaderTextWrapper,
  IntegrationHomeWrapper,
} from "./IntegrationOne.Styles";
import HomeImage from "../../../../assets/images/Integration1.png";
import { Typography } from "@mui/material";
const HeaderText = () => {
  return (
    <Typography variant="mainTitle1" component="span">
      Connect your <span className="orange-text">Lead Gen & CRM </span>by
      Constant Contact and <span className="green-text">PandaDoc</span> partner
      apps to create a proposal
    </Typography>
  );
};
const IntegrationHome = ({ handleSkip, handleContinue }) => {
  return (
    <IntegrationHomeWrapper>
      <HeaderTextWrapper>
        <HeaderText />
      </HeaderTextWrapper>
      <div className="homeimg">
        {" "}
        <img src={HomeImage} alt="HomeImage" />
      </div>

      <div className="btn-container">
        <div className="btn-wrapper">
          <div className="btn" onClick={handleSkip}>
            <Typography variant="label2">Skip</Typography>
          </div>
          <div className="btn" onClick={handleContinue}>
            <Typography variant="label2">Continue</Typography>
          </div>
        </div>
      </div>
    </IntegrationHomeWrapper>
  );
};

export default IntegrationHome;
