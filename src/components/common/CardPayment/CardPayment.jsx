import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider, InputAdornment } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonIcon from "@mui/icons-material/Person";
import BusinessIcon from "@mui/icons-material/Business";
import visaIcon from "../../../../src/assets/images/visa.png";
import mastericon from "../../../../src/assets/images/masterlarge.png";
import americanExpress from "../../../../src/assets/images/ae-large.png";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { IntegrationContext } from "../../integrationContext/IntegrationContext";

const PaymentForm = ({ ChangeTab, BankValue, ChangeStatus }) => {
  const handleClick = () => {
    ChangeTab(BankValue);
    ChangeStatus();
  };
  return (
    <CardContent>
      <Box>
        <Typography
          sx={{
            color: "white",
            fontWeight: "700",
            fontSize: "20px",
            margin: "5px",
          }}
        >
          Please Enter your payment details
        </Typography>
        <TextField
          fullWidth
          size="small"
          placeholder="Email *"
          id="fullWidth"
          sx={{
            borderRadius: "2px",
            border: "2px #5F6B79 solid",
            margin: "10px 3px",
            background: "#323E4A",
          }}
          InputProps={{
            style: { color: "#FFFFFF" },
            startAdornment: (
              <InputAdornment position="start" sx={{ color: "white" }}>
                <MailOutlineIcon
                  sx={{ fontSize: "18px", marginRight: "10px" }}
                />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          placeholder="Full Name *"
          size="small"
          sx={{
            borderRadius: "2px",
            border: "2px #5F6B79 solid",
            margin: "10px 3px",
            background: "#323E4A",
          }}
          InputProps={{
            style: { color: "#FFFFFF" },
            startAdornment: (
              <InputAdornment position="start" sx={{ color: "white" }}>
                <PersonIcon sx={{ fontSize: "18px", marginRight: "10px" }} />
              </InputAdornment>
            ),
          }}
          id="fullWidth"
        />
        <Divider
          style={{ border: "solid 1px rgb(148 168 191)", margin: "10px 0px" }}
        />

        <TextField
          fullWidth
          size="small"
          sx={{
            borderRadius: "2px",
            border: "2px #5F6B79 solid",
            margin: "10px 3px",
            background: "#323E4A",
          }}
          placeholder="Street Address *"
          InputProps={{
            style: { color: "#FFFFFF" },
            startAdornment: (
              <InputAdornment position="start" sx={{ color: "white" }}>
                <BusinessIcon sx={{ fontSize: "18px", marginRight: "10px" }} />
              </InputAdornment>
            ),
          }}
          id="fullWidth"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <TextField
            fullWidth
            size="small"
            sx={{
              borderRadius: "2px",
              border: "2px #5F6B79 solid",
              margin: "10px 3px",
              background: "#323E4A",
            }}
            placeholder="Country *"
            InputProps={{
              style: { color: "#FFFFFF" },
              startAdornment: (
                <InputAdornment position="start" sx={{ color: "white" }}>
                  <BusinessIcon
                    sx={{ fontSize: "18px", marginRight: "10px" }}
                  />
                </InputAdornment>
              ),
            }}
            id="fullWidth"
          />
          <TextField
            fullWidth
            size="small"
            sx={{
              borderRadius: "2px",
              border: "2px #5F6B79 solid",
              margin: "10px 3px",
              background: "#323E4A",
            }}
            placeholder="State *"
            InputProps={{
              style: { color: "#FFFFFF" },
              startAdornment: (
                <InputAdornment position="start" sx={{ color: "white" }}>
                  <BusinessIcon
                    sx={{ fontSize: "18px", marginRight: "10px" }}
                  />
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
          }}
        >
          <TextField
            fullWidth
            size="small"
            sx={{
              borderRadius: "2px",
              border: "2px #5F6B79 solid",
              margin: "10px 3px",
              background: "#323E4A",
            }}
            placeholder="City *"
            className="textBox"
            InputProps={{
              style: { color: "#FFFFFF" },
              startAdornment: (
                <InputAdornment position="start" sx={{ color: "white" }}>
                  <BusinessIcon
                    sx={{ fontSize: "18px", marginRight: "10px" }}
                  />
                </InputAdornment>
              ),
            }}
            id="fullWidth"
          ></TextField>
          <TextField
            fullWidth
            placeholder="Postal Code *"
            size="small"
            sx={{
              borderRadius: "2px",
              border: "2px #5F6B79 solid",
              margin: "10px 3px",
              background: "#323E4A",
            }}
            InputProps={{
              style: { color: "#FFFFFF" },
              startAdornment: (
                <InputAdornment position="start" sx={{ color: "white" }}>
                  <BusinessIcon
                    sx={{ fontSize: "18px", marginRight: "10px" }}
                  />
                </InputAdornment>
              ),
            }}
            id="fullWidth"
          />
        </div>
        <Divider
          style={{ border: "solid 1px rgb(148 168 191)", margin: "10px 0px" }}
        />
        <TextField
          fullWidth
          size="small"
          sx={{
            borderRadius: "2px",
            border: "2px #5F6B79 solid",
            margin: "10px 3px",
            background: "#323E4A",
          }}
          placeholder="Card Number *"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ color: "white" }}>
                <CreditCardIcon
                  sx={{ fontSize: "18px", marginRight: "10px" }}
                />
              </InputAdornment>
            ),
          }}
          id="fullWidth"
        />

        <div style={{ margin: "10px 0px" }}>
          <div className="row">
            <div className="col-lg-4">
              <div
                className="icon-card"
                style={{
                  border: "solid 1px #323E4A",
                  backgroundColor: "#323E4A",
                  padding: "5px",
                }}
              >
                <img
                  src={mastericon}
                  alt=""
                  style={{ width: "15%", marginRight: "10px" }}
                />
                <img src={visaIcon} alt="" style={{ paddingRight: "10px" }} />
                <img src={americanExpress} alt="" style={{ width: "15%" }} />
              </div>
            </div>
            <div className="col-lg-3">&nbsp;</div>
            <div className="col-lg-5">
              <p
                style={{
                  cursor: "po",
                  border: "solid 1px #635BFF",
                  color: "#635BFF",
                  padding: "5px",
                  textAlign: "center",
                }}
              >
                Powered by Stripe
              </p>
            </div>
           
          </div>
        </div>
        <Button
          sx={{ background: "#556273", borderRadius: "3px", margin: "3px",textTransform:"capitalize" }}
          variant="contained"
          onClick={() => handleClick()}
        >
          Continue to Checkout
        </Button>
      </Box>
    </CardContent>
  );
};

export default function CardPayment({ ChangeTab, BankValue, ChangeStatus }) {
  return (
    <Box sx={{ width: "100%", marginLeft: "5%" }}>
      <Card variant="outlined" sx={{ backgroundColor: "#3E4B5C" }}>
        <PaymentForm
          BankValue={BankValue}
          ChangeStatus={ChangeStatus}
          ChangeTab={ChangeTab}
        />
      </Card>
    </Box>
  );
}
