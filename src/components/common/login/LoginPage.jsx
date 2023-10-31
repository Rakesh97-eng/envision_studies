import React from "react";
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
import { Loginwrapper } from "./Login.Styles";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

function Login({navigateTo}) {
  const navigate = useNavigate();
  const handleNavigation = (navpath)=>{
    navigate(navpath)
  }
  const handleNavigation1 = (nav)=>{
    navigate(navigateTo)
  }
  return (
    <Loginwrapper>
      <div style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Box className="loginbox">
        <Card className="logincard">
          <CardMedia className="txtcenter">
            <img className="imgstyle" src={Logo} alt="Logo" />
          </CardMedia>
          <CardContent className="txtcenter">
            <h4 style={{fontWeight:"600"}}>Sign In</h4>
            <p className="loginp">
              {" "}
              Welcome to <span className="envision-text">envision</span>
              <span style={{ color: "#DC922D" }}>L</span>
              <span style={{ color: "#16BEEB" }}>X</span>
              <span style={{ color: "#68C337" }}>P</span>
              <span style={{ color: "#0052CC" }}>J</span>. Please sign in or
              create an account to continue
            </p>
          </CardContent>
          <Grid className="logingrid" container spacing={3}>
            <Grid item xs={12}>
              <FormField placeholder="Username" />
            </Grid>
            <Grid item xs={12}>
              <InputPassword placeholder="Password" />
            </Grid>
          </Grid>
          <Typography className="forget" gutterBottom component="div"  onClick={()=>handleNavigation('/forgot-password')} >
            Forgot Password?
          </Typography>
          <div className="btndiv">
            <button className="btnbtn" size="medium" variant="contained" onClick={()=>handleNavigation1('/dashboard/integration1')}>
              Sign In
            </button>
          </div>

          <Typography className="dnttxt">
            {" "}
            Don't have an account? {""}
            <Link className="links" onClick={()=>handleNavigation('/user-register')}>
              Create Account
            </Link>
          </Typography>
        </Card>
      </Box>

      </div>
    </Loginwrapper>
  );
}

export default Login;
