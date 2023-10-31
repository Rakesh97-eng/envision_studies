import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import Logo from "../../../assets/images/envisionLogo.png";
import { FormCardWrapper } from "../../user/integrationOne/leadGenAndCRM/LeadGenAndCrm.Styles";
import FormField from "../FormField/FormField";
import InputPassword from "../../common/InputPassword/InputPassword";
import React from "react";
import { Forgotwrapper } from "./Forgot.Style";
import { useNavigate } from "react-router-dom";


function ForgotPassword() {
  const navigate = useNavigate();
  const handleNavigation = (navpath)=>{
    navigate(navpath)
  }
  return (
    <Forgotwrapper>
      <Box className="loginbox" >
        <Card className="logincard">
          <CardMedia className="txtcenter">
            <img className="imgstyle" src={Logo} alt="Logo" />
          </CardMedia>
          <CardContent className="txtcenter">
            <h4 style={{fontWeight:"600"}}>Forgot Password</h4>
            <p className="forgotp">
              Please enter your email address below to receive a password reset
              email
            </p>
          </CardContent>
          <Grid className="gridn" container spacing={3}>
            <Grid item xs={12}>
              <FormField  placeholder="Email *" />
            </Grid>
          </Grid>

          <div className="btndiv">
            <button className="btnbtn" size="small" variant="contained">
              Send Email
            </button>
          </div>

          <Typography className="know"  onClick={()=>handleNavigation('/')}> I Know my Password {""}</Typography>
        </Card>
      </Box>
    </Forgotwrapper>
  );
}

export default ForgotPassword;
