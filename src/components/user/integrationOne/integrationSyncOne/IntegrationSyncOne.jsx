import Sync from "../../sync/Sync";
import { SYNC } from "../../../../utils/constants/syncConstant";
import { apiData1 } from "../../../../utils/constants/logTableData";
const IntegrationSyncOne = ({ChangeTab,SyncValue}) => {
  return <Sync ChangeTab={ChangeTab} SyncValue={SyncValue} syncData={SYNC} apiTableData={apiData1}/>;
};
export default IntegrationSyncOne;
