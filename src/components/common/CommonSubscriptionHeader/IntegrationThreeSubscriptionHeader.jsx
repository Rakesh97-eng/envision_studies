import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Grid, Typography } from "@mui/material";
import {  integrationThreeTierOneSubscription, IntegrationThreeTierOneTitle, integrationThreeTierThreeSubscription, IntegrationThreeTierThreeTitle, integrationThreeTierTwoSubscription, IntegrationThreeTierTwoTitle } from "../../../utils/constants/subscriptionConstants";
import SubscriptioncCard from "../customSubscription/SubscriptionCard";
import CardPayment from "../CardPayment/CardPayment";
import BankPayment from "../BankPayment/BankPayment";

export default function IntegrationThreeChoosePack({BankValue,ChangeTab, ChangeStatus}) {

  const [subscriptionPack, setSubscriptionPack] = React.useState("Tier1");
  const [value, setValue] = React.useState("bank");

  const handleSubscriptionPackChange = (event) => {
    setSubscriptionPack(event.target.value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Grid container spacing={6} sx={{ color: "white",padding:"20px 0px" }}>
        <Grid item xs={6}>
          <FormControl sx={{ marginLeft: "5%" }}>
            <Typography sx={{fontSize:"20px",fontWeight:"600"}}>Select Subscription Pack</Typography>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={subscriptionPack}
              onChange={handleSubscriptionPackChange}
              sx={{paddingTop:"10px"}}
            >
              <FormControlLabel
                value="Tier1"
                control={<Radio color="success" sx={{color:"white",fontSize:"16px"}} />}
                label={<span style={{ fontSize: "16px" }}>Tier 1</span>}
              />
              <FormControlLabel
                value="Tier2"
                control={<Radio color="success" sx={{color:"white"}} />}
                label={<span style={{ fontSize: "16px" }}>Tier 2</span>}
              />
              <FormControlLabel
                value="Tier3"
                control={<Radio color="success" sx={{color:"white"}} />}
                label={<span style={{ fontSize: "16px" }}>Tier 3</span>}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl sx={{ marginRight: "5%" }}>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="bank"
                control={<Radio color="success" sx={{color:"white"}}/>}
                label="Add Bank Detail"
              />
              <FormControlLabel
                value="card"
                control={<Radio color="success" sx={{color:"white"}} />}
                label="Add Card Detail"
              />

            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6}>
          {subscriptionPack === "Tier1" && (
            <SubscriptioncCard
              ChildCardText={IntegrationThreeTierOneTitle}
              ChildContentText={integrationThreeTierOneSubscription}
            />
          )}
          {subscriptionPack === "Tier2" && (
            <SubscriptioncCard
              ChildCardText={IntegrationThreeTierTwoTitle}
              ChildContentText={integrationThreeTierTwoSubscription}
            />
          )}
          {subscriptionPack === "Tier3" && (
            <SubscriptioncCard
              ChildCardText={IntegrationThreeTierThreeTitle}
              ChildContentText={integrationThreeTierThreeSubscription}
            />
          )}
        </Grid>
        <Grid item xs={6}>
          {value === "card" && (
            <CardPayment BankValue={BankValue} ChangeTab={ChangeTab} ChangeStatus={ChangeStatus} />
           )} 
          {value === "bank" && (
            <BankPayment  BankValue={BankValue} ChangeTab={ChangeTab} ChangeStatus={ChangeStatus} />
          )}
        </Grid>
      </Grid>
    </>
  );
}
