import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { InputAdornment } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonIcon from "@mui/icons-material/Person";
import BusinessIcon from '@mui/icons-material/Business';
import CreditCardIcon from '@mui/icons-material/CreditCard';
// import { FormWrappper } from "./customForm.style";

const BankForm =({BankValue,ChangeTab, ChangeStatus})=>{

  const handleClick = () => {
    ChangeTab(BankValue);
    ChangeStatus();
  };

  return(
    <CardContent>
    <Box >
      <Typography sx={{ color: "white", fontWeight: "700", fontSize: "20px", margin: "5px 5px 10px 5px" }}>Please enter your bank details</Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "10px"
        }}
      >
        <TextField
          fullWidth
          size="small"
          sx={{ borderRadius: "2px", border: "2px #5F6B79 solid", margin: "5px 3px 5px 10px", background: "#323E4A" }}
          placeholder="Full Name *"
          InputProps={{
            style: { color: "#FFFFFF" },
            startAdornment: (
              <InputAdornment position="start" sx={{ color: "white" }}>
                <PersonIcon sx={{ fontSize: "18px" }} />
              </InputAdornment>
            ),
          }}
          id="fullWidth"
        />
        <TextField
          fullWidth
          size="small"
          sx={{ borderRadius: "2px", border: "2px #5F6B79 solid", margin: "5px 3px 5px 10px", background: "#323E4A" }}
          placeholder="Email *"
          InputProps={{
            style: { color: "#FFFFFF" },
            startAdornment: (
              <InputAdornment position="start" sx={{ color: "white" }}>
                <MailOutlineIcon sx={{ fontSize: "18px" }} />
              </InputAdornment>
            ),
          }}
          id="fullWidth"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "10px"
        }}
      >
        <TextField
          fullWidth
          size="small"
          sx={{ borderRadius: "2px", border: "2px #5F6B79 solid", margin: "5px 3px 5px 10px", background: "#323E4A" }}
          placeholder="BSB No *"
          className="textBox"
          InputProps={{
            style: { color: "#FFFFFF" },
            startAdornment: (
              <InputAdornment position="start" sx={{ color: "white" }}>
                <BusinessIcon sx={{ fontSize: "18px" }} />
              </InputAdornment>
            ),
          }}
          id="fullWidth"
        ></TextField>
        <TextField
          fullWidth
          placeholder="Bank Account*"
          size="small"
          sx={{ borderRadius: "2px", border: "2px #5F6B79 solid", margin: "5px 3px 5px 10px", background: "#323E4A" }}
          InputProps={{
            style: { color: "#FFFFFF" },
            startAdornment: (
              <InputAdornment position="start" sx={{ color: "white" }}>
                <CreditCardIcon sx={{ fontSize: "18px" }} />
              </InputAdornment>
            ),
          }}
          id="fullWidth"
        />
      </div>

      <Button sx={{ background: "#556273", borderRadius: "3px", margin: "3px",textTransform:"capitalize" }} variant="contained" disableElevation onClick={() => handleClick()}>
       Proceed Payment
      </Button>
    </Box>
  </CardContent>
  )
}
export default function BankPayment({BankValue,ChangeTab, ChangeStatus}) {
  return (
    <Box sx={{ width: "100%", marginLeft: "5%" }} >
      <Card variant="outlined" sx={{ backgroundColor: "#3E4B5C", borderRadius: "10px" }}><BankForm   BankValue={BankValue}  ChangeStatus={ChangeStatus} ChangeTab={ChangeTab}/></Card>
    </Box>
  );
}
