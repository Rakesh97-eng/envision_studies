/* eslint-disable react/prop-types */
import {
  HeaderTextWrapper,
  IntegrationHomeWrapper,
} from "./IntegrationThree.Styles";
import HomeImage from "../../../../assets/images/Integration3.png";
import { Typography } from "@mui/material";
const HeaderText = () => {
  return (
    <Typography variant="mainTitle1" component="span">
      Connect your <span className="green-text">PandaDoc </span>and{" "}
      <span className="blue-text">Jira</span> partner partner apps to manage
      projects
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
