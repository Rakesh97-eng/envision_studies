import Sync from "../../sync/Sync";
import { SYNC2 } from "../../../../utils/constants/syncConstant";
import { apiData2 } from "../../../../utils/constants/logTableData";
const IntegrationSyncTwo = () => {
  return <Sync syncData={SYNC2} apiTableData={apiData2}/>;
};
export default IntegrationSyncTwo;
