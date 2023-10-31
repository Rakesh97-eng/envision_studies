import stripepartner from "../../../assets/images/Stripe-partner.png";
import stripeword from "../../../assets/images/stripeword.png";
import { Divider, Typography } from "@mui/material";
import TitleBar from "../../common/customTitleBar/TitleBar";
import IntegrationOneChoosePack from "../../common/CommonSubscriptionHeader/IntegrationOneSubscriptionHeader";

const SubText = () => {
  return (
    <Typography variant="title3Regular">
      Enter your payment details
    </Typography>
  );
};

export const IntegrationOneBankpayment = ({ChangeTab,BankValue,ChangeStatus}) => {
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
      <IntegrationOneChoosePack ChangeTab={ChangeTab} ChangeStatus={ChangeStatus} BankValue={BankValue}/>
    </>
  );
};
