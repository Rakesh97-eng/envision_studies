import Sync from "../../sync/Sync";
import { SYNC3 } from "../../../../utils/constants/syncConstant";
import { apiData3 } from "../../../../utils/constants/logTableData";
const IntegrationSyncThree = () => {
  return <Sync syncData={SYNC3}apiTableData={apiData3}/>;
};
export default IntegrationSyncThree;
