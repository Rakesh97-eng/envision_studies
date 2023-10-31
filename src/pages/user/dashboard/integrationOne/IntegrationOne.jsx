import { useContext, useState } from "react";
import HeaderTabs from "../../../../components/common/customHeader/Header";
import ConnectPandaDoc from "../../../../components/user/integrationOne/connectPandaDoc/ConnectPandaDoc";
import LeadGenAndCrm from "../../../../components/user/integrationOne/leadGenAndCRM/LeadGenAndCrm";
import { IntegrationOneHeader } from "../../../../utils/constants/headerConstants";
import IntegrationHome from "./IntegrationHome";
import { IntegrationOneWrapper } from "./IntegrationOne.Styles";
import IntegrationSyncOne from "../../../../components/user/integrationOne/integrationSyncOne/IntegrationSyncOne";
import { IntegrationOneBankpayment } from "../../../../components/user/stripePayment/StrtipePayment";
import { IntegrationContext } from "../../../../components/integrationContext/IntegrationContext";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../../../utils/constants/path";

const Comp1 = () => {
  return <h1>test</h1>;
};
const IntegrationOne = () => {
  const [isShowHome, setIsShowHome] = useState(true);
  const {dashboard,ChangeTabOneValue,ChangeTabStatus} = useContext(IntegrationContext)
  const navigate = useNavigate();
  let tabvalue = dashboard.integrationone.tabValue; 
  let tabindex = dashboard.integrationone.tabIndex; 
  let NewTabValue = {Leaddoc:1,pandadoc:2,bankpayment:3,sync:4}

  const ChangeTab = (value)=>{
    ChangeTabOneValue({tabvalue:value})
  }
  const ChangeStatus = ()=>{
    ChangeTabStatus({tabstatus:0})
  }
  return (
    <IntegrationOneWrapper>
      {isShowHome ? (
        <IntegrationHome
          handleSkip={() => {
            setIsShowHome(false);
            // navigate(PATH.integration1)
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
          HeaderData={IntegrationOneHeader}
          Tabcontent1={<LeadGenAndCrm LeadDocValue={NewTabValue.Leaddoc} ChangeTab={ChangeTab}/>}
          Tabcontent2={<ConnectPandaDoc PandaDocValue={NewTabValue.pandadoc} ChangeTab={ChangeTab}/>}
          Tabcontent3={<IntegrationOneBankpayment ChangeStatus={ChangeStatus}  BankValue={NewTabValue.bankpayment} ChangeTab={ChangeTab}/>}
          Tabcontent4={<IntegrationSyncOne/>}
        />
      )}
    </IntegrationOneWrapper>
  );
};
export default IntegrationOne;
