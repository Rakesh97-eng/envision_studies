/* eslint-disable react/prop-types */
import {
  Card,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { StepperCardWrapper } from "./Stepper.Styles";

function StepperCard({ stepperData }) {
  return (
    <StepperCardWrapper>
      <Box sx={{ width: "90%" }}>
        <Card
          style={{
            padding: "30px",
            borderRadius: "15px",
            background: "rgba(62, 75, 92, 1)",
            color: "white",
          }}
        >
          <Stepper style={{ color: "white" }} orientation="vertical">
            {stepperData?.map((step) => (
              <Step active style={{ color: "white" }} key={step.label} >
                <StepLabel className="stepper-label" >{step.label}</StepLabel>
                <StepContent>
                  <Typography style={{ color: "white" }}>
                    {step.description}
                  </Typography>
                  {step.link && (
                    <div className="link-comp">
                      <Typography>
                        https://
                        <Typography component={"span"} className="red-text">
                          company
                        </Typography>
                        .constantcontact.com
                      </Typography>
                    </div>
                  )}
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Card>
      </Box>
    </StepperCardWrapper>
  );
}

export default StepperCard;
