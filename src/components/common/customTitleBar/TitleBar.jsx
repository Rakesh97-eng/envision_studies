/* eslint-disable react/prop-types */

import { Typography } from "@mui/material";
import { TitleBarWrapper } from "./TitleBar.Styles";

function TitleBar({ titleBarData }) {
  const { leftImage, title, SubText, rightImage } = titleBarData;
  return (
    <TitleBarWrapper>
      <div className="first-part">
        <div>
          <img src={leftImage} alt="left-image" />
        </div>
        <div className="text-part">
          <Typography component='span' variant="mainTitle">{title}</Typography>
          <div className="subtext-part">
          <SubText/>
          </div>
       
        </div>
      </div>
      <div className="second-part">
        <img className="secondimg" src={rightImage} alt="right-image" />
      </div>
    </TitleBarWrapper>
  );
}

export default TitleBar;
