import { useContext, useState } from "react";
import HeaderTabs from "../../../../components/common/customHeader/Header";
import { IntegrationTwoHeader } from "../../../../utils/constants/headerConstants";
import IntegrationHome from "./IntegrationHome";
import { IntegrationTwoWrapper } from "./IntegrationTwo.Styles";
import IntegrationSyncTwo from "../../../../components/user/integrationTwo/ingerationSyncTwo/IntegrationSyncTwo";
import ConnectPandaDoc from "../../../../components/user/integrationOne/connectPandaDoc/ConnectPandaDoc";
import ConnectXero from "../../../../components/user/integrationTwo/connectToXero/ConnectXero";
import {  IntegrationTwoBankpayment } from "../../../../components/user/stripePayment/StrtipePaymentTwo";
import { IntegrationContext } from "../../../../components/integrationContext/IntegrationContext";

const Comp1 = () => {
  return <h1>test</h1>;
};

const IntegrationTwo = () => {
  const [isShowHome, setIsShowHome] = useState(true);
  const {dashboard,ChangeTabTwoValue,ChangeTabStatus} = useContext(IntegrationContext)
  let tabvalue = dashboard.integrationTwo.tabValue; 
  let tabindex = dashboard.integrationTwo.tabIndex; 
  let NewTabValue = {pandadoc:1,xero:2,bankpayment:3,sync:4}

  const ChangeTab = (value)=>{
    ChangeTabTwoValue({tabvalue:value})
  }

  const ChangeStatus = ()=>{
    ChangeTabStatus({tabstatus:1})
  }
  return (
    <IntegrationTwoWrapper>
      {isShowHome ? (
        <IntegrationHome
          handleSkip={() => {
            setIsShowHome(false);
          }}
          handleContinue={() => {
            setIsShowHome(false);
          }}
        />
      ) : (
        <HeaderTabs
          TabValue = {tabvalue}
          TabIndex = {tabindex}
          HeaderTabChange = {ChangeTab}
          HeaderData={IntegrationTwoHeader}
          Tabcontent1={<ConnectPandaDoc ChangeTab={ChangeTab} PandaDocValue={NewTabValue.pandadoc}/>}
          Tabcontent2={<ConnectXero ChangeTab={ChangeTab}  XeroValue={NewTabValue.xero}/>}
          Tabcontent3={<IntegrationTwoBankpayment ChangeStatus={ChangeStatus}  ChangeTab={ChangeTab} BankValue={NewTabValue.bankpayment}/>}
          Tabcontent4={<IntegrationSyncTwo ChangeTab={ChangeTab} SyncValue={NewTabValue.sync}/>}
        />
      )}
    </IntegrationTwoWrapper>
  );
};
export default IntegrationTwo;
