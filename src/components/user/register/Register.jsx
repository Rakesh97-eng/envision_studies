import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Container,
  FormControl,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Logo from "../../../assets/images/envisionLogo.png";
import FormField from "../../common/FormField/FormField";
import InputPassword from "../../common/InputPassword/InputPassword";
import { RegisterStepper } from "../../../utils/constants/StepperText";
import StepperCard from "../../common/customStepperCard/StepperCard";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { RegWrapper } from "./Register.Styles";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [gender, setGender] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const handleTitleChange = (event) => {
    setSelectedTitle(event.target.value);
  };
  const handleChange = (event) => {
    setGender(event.target.value);
  };
  const [envisionwebsite, setEvisionwebsite] = useState("");

  const websiteselect = (event) => {
    setEvisionwebsite(event.target.value);
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleNavigation = (navpath)=>{
    navigate(navpath)
  }
  return (
    <>
      <RegWrapper>
        {/* <div style={{ display: "flex", justifyContent:"space-arround",}}> */}
          <Grid container style={{backgroundColor:"#3E4B5C"}}>
          <Grid item xs={4} justifyContent="center"  className="regCard" >

            <CardMedia className="imgstyle">
                <img src={Logo} alt="Logo" />
              </CardMedia>
              <CardContent style={{fontSize:"14.5px"}}>
                <p>
                  Following are the pre-requesities that would be required once
                  you signup.
                </p>
                <p>Make sure all below requirements are fullfilled</p>

                <StepperCard stepperData={RegisterStepper} />
                
              </CardContent>
          </Grid>
            
        
          <Grid item xs={6} justifyContent className="rightdiv">
            <Box className="formBox">
              <Box className="boxNext">
                <CardContent className="content">
                  <h5 style={{fontWeight:"bold"}}>Create Account</h5>
                  <p className="create">
                    {" "}
                    Create an{" "}
                    <span
                      style={{ color: "#16BEEB" }}
                      className="envision-text"
                    >
                      envision
                    </span>
                    <span style={{ color: "#DC922D" }}>L</span>
                    <span style={{ color: "#16BEEB" }}>X</span>
                    <span style={{ color: "#68C337" }}>P</span>
                    <span style={{ color: "#0052CC" }}>J</span> account to begin
                    syncing data
                  </p>
                  <hr />
                </CardContent>
                <Box>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 4 }}
                  >
                    <Grid item xs={12} sm={6}>
                      <TextField
                        className="textfeild"
                        fullWidth
                        size="small"
                        placeholder="Email *"
                        id="fullWidth"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Container></Container>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Select
                        className="txtleft"
                        labelId="outlined-age-native-simple-placeholder"
                        value={selectedTitle}
                        onChange={handleTitleChange}
                        fullWidth
                        size="small"
                        sx={{
                          borderRadius: "2px",
                          border: "2px #5F6B79 solid",
                          margin: "10px 3px",
                          background: "#323E4A",
                          "& .MuiSelect-select": {
                            color: "white",
                          },
                          "& .MuiSelect-icon": {
                            color: "white",
                          },
                        }}
                        displayEmpty
                        id="fullWidth"
                        inputProps={{
                          name: "title",
                          id: "outlined-age-native-simple",
                        }}
                      >
                        <MenuItem value="">Gender *</MenuItem>
                        <MenuItem value={10}>Mr</MenuItem>
                        <MenuItem value={20}>Mrs</MenuItem>
                        <MenuItem value={30}>Miss</MenuItem>
                        <MenuItem value={10}>Ms</MenuItem>
                        <MenuItem value={20}>Mx</MenuItem>
                        <MenuItem value={30}>Sir</MenuItem>
                        <MenuItem value={20}>Dr</MenuItem>
                        <MenuItem value={30}>Prof</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        className="textfeild"
                        fullWidth
                        size="small"
                        placeholder="First Name *"
                        id="fullWidth"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        className="textfeild"
                        fullWidth
                        size="small"
                        placeholder="Last Name *"
                        id="fullWidth"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        className="textfeild"
                        fullWidth
                        size="small"
                        placeholder="Company Name *"
                        id="fullWidth"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        className="textfeild"
                        fullWidth
                        size="small"
                        placeholder="Country *"
                        id="fullWidth"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        className="textfeild"
                        fullWidth
                        size="small"
                        placeholder="Number *"
                        id="fullWidth"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <OutlinedInput
                        className="textfeild"
                        size="small"
                        id="outlined-adornment-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password *"
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              size="small"
                              edge="end"
                            >
                              {showPassword ? (
                                <Visibility
                                  sx={{ color: "white", fontSize: "18px" }}
                                />
                              ) : (
                                <VisibilityOff
                                  sx={{ color: "white", fontSize: "18px" }}
                                />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <OutlinedInput
                        size="small"
                        sx={{
                          borderRadius: "2px",
                          border: "2px #5F6B79 solid",
                          margin: "10px 3px",
                          background: "#323E4A",
                          "& .MuiMenuItem-root": {
                            justifyContent: "flex-start", // Align text to the starting (left) side
                          },
                        }}
                        id="outlined-adornment-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm Password *"
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              size="small"
                              edge="end"
                            >
                              {showPassword ? (
                                <Visibility
                                  sx={{ color: "white", fontSize: "18px" }}
                                />
                              ) : (
                                <VisibilityOff
                                  sx={{ color: "white", fontSize: "18px" }}
                                />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Select
                        className="txtleft"
                        value={selectedTitle}
                        onChange={handleTitleChange}
                        fullWidth
                        size="small"
                        sx={{
                          borderRadius: "2px",
                          border: "2px #5F6B79 solid",
                          margin: "10px 3px",
                          background: "#323E4A",
                          "& .MuiSelect-select": {
                            color: "white",
                          },
                          "& .MuiSelect-icon": {
                            color: "white",
                          },
                        }}
                        displayEmpty
                        inputProps={{
                          name: "title",
                          id: "outlined-age-native-simple",
                        }}
                      >
                        <MenuItem value="">Envision Website *</MenuItem>
                        <MenuItem value={10}>Xero market place</MenuItem>
                        <MenuItem value={20}>Referral</MenuItem>
                        <MenuItem value={30}>Google SEO</MenuItem>
                        <MenuItem value={10}>Google Ads</MenuItem>
                        <MenuItem value={20}>Linked IN</MenuItem>
                        <MenuItem value={30}>Facebook</MenuItem>
                        <MenuItem value={20}>instagram</MenuItem>
                        <MenuItem value={30}>Retargeting</MenuItem>
                        <MenuItem value={20}>Partner</MenuItem>
                      </Select>
                      <label className="label">
                        How did you hear about us?
                      </label>
                    </Grid>
                  </Grid>

                  <div style={{ paddingTop: "30px", fontSize: "14px" }}>
                    <Checkbox
                      size="small"
                      control={<Checkbox />}
                      style={{ color: "#FFF" }}
                    />
                    <span style={{ color: "#FFF" }}>
                      By checking this box I certify that I have read and
                      accepted the{" "}
                    </span>
                    <span
                      style={{ color: "#16BEEB" }}
                      className="links"
                      href="#"
                    >
                      Privacy Policy
                    </span>{" "}
                    <span style={{ color: "#FFF" }}> and</span>{" "}
                    <span style={{ color: "#16BEEB" }} className="links">
                      Terms and Conditions
                    </span>
                  </div>

                  <Button
                    variant="contained"
                    size="medium"
                    sx={{
                      backgroundColor: "#556273",
                      textTransform: "initial",
                      mt:4 ,
                    }}
                    onClick={()=>handleNavigation('/')}
                  >
                    Register
                  </Button>

                  <Grid item container direction="column">
                    <Typography className="already">
                      Already have an account?{" "}
                      <span style={{cursor:"pointer"}} className="signin" to="/signin" onClick={()=>handleNavigation('/')} >
                        Sign In
                      </span>
                    </Typography>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Grid>

          
          <Grid item xs={2} style={{backgroundColor:"#3E4B5C"}}>
          </Grid>
          </Grid>
        
        {/* </div> */}
      </RegWrapper>
    </>
  );
};

export default Register;
