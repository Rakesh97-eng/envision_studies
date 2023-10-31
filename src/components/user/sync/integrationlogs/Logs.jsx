import { Divider, Typography } from "@mui/material";
import { IntegrationLogsWrapper, SyncDetailsWrapper } from "./Logs.styles";
import CustomTable from "../../../common/CustomTable/CustomTable";
import SearchBox from "../../../common/SearchBox/SearchBox";

const SyncDetails = () => {
  return (
    <SyncDetailsWrapper>
      <table>
        <tr>
          <td>
            <Typography variant="label">Last Synced</Typography>
          </td>
          <td>:</td>
          <td>
            <Typography variant="label">13/07/2023, 12:45:30</Typography>{" "}
          </td>
        </tr>
        <tr>
          <td>
            <Typography variant="label">
              No of Records Last Synced - Successful
            </Typography>
          </td>
          <td>:</td>
          <td>
            <Typography variant="label">4</Typography>
          </td>
        </tr>
        <tr>
          <td>
            <Typography variant="label">No. of Errors</Typography>
          </td>
          <td>:</td>
          <td>
            {" "}
            <Typography variant="label">3</Typography>
          </td>
        </tr>
      </table>
    </SyncDetailsWrapper>
  );
};
const tableData = [
  {
    field: "logId",
    label: "Log Id",
    align: "center",
  },
  {
    field: "type",
    label: "Type",
  },
  {
    field: "message",
    label: "Message",
  },
  {
    field: "createdAt",
    label: "Created Date & Time",
  },
  {
    field: "syncId",
    label: "Sync ID",
    align: "center",
  },
];
const apiData = [
  {
    logId: "12",
    type: "Opportunity Sync Error (From PandaDoc)",
    message: "Lorem ipsum text message",
    createdAt: "2023-08-29, 12:45:30",
    syncId: "108",
  },
  {
    logId: "13",
    type: "Client Contact Sync Error (From Lead Gen & CRM)",
    message: "Lorem ipsum text message",
    createdAt: "2023-08-29, 12:45:30",
    syncId: "108",
  },
  {
    logId: "14",
    type: "Lead Owner Sync Error (From PandaDoc)",
    message: "Lorem ipsum text message",
    createdAt: "2023-08-29, 12:45:30",
    syncId: "108",
  },
];
const IntegrationLogs = ({ apiTableData }) => {
  return (
    <IntegrationLogsWrapper>
      <Typography variant="title2">Sync Status</Typography>
      <Divider sx={{border:"solid 1px #5F6B79 !important",margin:"14px 0px !important"}}/>
      <SyncDetails />
      <div className="search-box">
      <Typography variant="title2">Sync Log Error Details</Typography>
        <SearchBox />
      </div>
      <CustomTable tableData={tableData} apiData={apiTableData} />
    </IntegrationLogsWrapper>
  );
};
export default IntegrationLogs;
