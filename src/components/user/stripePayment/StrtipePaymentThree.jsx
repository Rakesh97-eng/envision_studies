import stripepartner from "../../../assets/images/Stripe-partner.png";
import stripeword from "../../../assets/images/stripeword.png";
import { Divider, Typography } from "@mui/material";
import TitleBar from "../../common/customTitleBar/TitleBar";
import IntegrationThreeChoosePack from "../../common/CommonSubscriptionHeader/IntegrationThreeSubscriptionHeader";

const SubText = () => {
  return (
    <Typography variant="title3Regular">
      Enter your payment details
    </Typography>
  );
};

export const IntegrationThreeBankpayment = ({ChangeTab,BankValue,ChangeStatus}) => {
  const titleBarData = {
    leftImage: stripeword,
    rightImage: stripepartner,
    title: "Payment Details",
    SubText: SubText,
  };

  return (
    <>
      <TitleBar titleBarData={titleBarData} />
      <Divider sx={{ border: "solid 1px #5F6B79" }} />  
      <IntegrationThreeChoosePack ChangeTab={ChangeTab} ChangeStatus={ChangeStatus} BankValue={BankValue}/>
    </>
  );
};