import React from "react";

function CustomButton(props) {
  const { imageicon, buttonname } = props;
  const buttonstyle = {
    // width: "100%",
    // padding: "0px",
    // marginTop: "40px",
    // color: "gray",
  };
  return (
    <div>
      <Button style={buttonstyle} variant="outlined" startIcon={imageicon}>
        {buttonname}
      </Button>
    </div>
  );
}

export default CustomButton;
