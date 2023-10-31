import { useContext, useState } from "react";
import HeaderTabs from "../../../../components/common/customHeader/Header";
import { IntegrationThreeHeader } from "../../../../utils/constants/headerConstants";
import IntegrationHome from "./IntegrationHome";
import { IntegrationThreeWrapper } from "./IntegrationThree.Styles";
import IntegrationSyncThree from "../../../../components/user/integrationThree/ingerationSyncThree/IntegrationSyncThree";
import ConnectPandaDoc from "../../../../components/user/integrationOne/connectPandaDoc/ConnectPandaDoc";
import ConnectJira from "../../../../components/user/integrationThree/connectJira/ConnectJira";
import { IntegrationThreeBankpayment } from "../../../../components/user/stripePayment/StrtipePaymentThree";
import { IntegrationContext } from "../../../../components/integrationContext/IntegrationContext";

const Comp1 = () => {
  return <h1>test</h1>;
};
const IntegrationThree = () => {
  const [isShowHome, setIsShowHome] = useState(true);
  let NewTabValue = {pandadoc:1,Jiradoc:2,bankpayment:3,sync:4}
  const {dashboard,ChangeTabThreeValue,ChangeTabStatus} = useContext(IntegrationContext)
  let tabvalue = dashboard.integrationThree.tabValue; 
  let tabindex = dashboard.integrationThree.tabIndex; 

  const ChangeTab = (value)=>{
    ChangeTabThreeValue({tabvalue:value})
  }

  const ChangeStatus=()=>{
    ChangeTabStatus({tabstatus:2})
  }
  return (
    <IntegrationThreeWrapper>
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

          HeaderData={IntegrationThreeHeader}
          Tabcontent1={<ConnectPandaDoc PandaDocValue={NewTabValue.pandadoc} ChangeTab={ChangeTab}/>}
          Tabcontent2={<ConnectJira  Jiradoc={NewTabValue.Jiradoc} ChangeTab={ChangeTab}/>}
          Tabcontent3={<IntegrationThreeBankpayment  ChangeStatus={ChangeStatus} BankValue={NewTabValue.bankpayment} ChangeTab={ChangeTab}/>}
          Tabcontent4={<IntegrationSyncThree/>}
        />
      )}
    </IntegrationThreeWrapper>
  );
};
export default IntegrationThree;
