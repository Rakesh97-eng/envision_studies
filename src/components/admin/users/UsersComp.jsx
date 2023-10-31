import { Divider, Switch, Typography } from "@mui/material";
import {
  ActionCreatorWrapper,
  CustomSwitchWrapper,
  UserCompWrapper,
} from "./UsersComp.Styles";
import SearchBox from "../../common/SearchBox/SearchBox";
import CustomTable from "../../common/CustomTable/CustomTable";
import DeleteIconRed from "../../../assets/icons/delete-red.svg";
import FileMove from "../../../assets/icons/file-move.svg";
import CustomTablePagination from "../../common/CustomPagination/CustomPagination";
import CustomSelect from "../../common/CustomSelect/CustomSelect";
import { commonSearchFilter } from "../../../utils/common/functions";
import { useState } from "react";

const apiData = [
  {
    accHolderName: "Henry wong",
    phNo: "0432833765",
    email: "hendry@yopmail.com",
    company: "ABC  Holdings Ltd",
    country: "Australia",
    dateJoined: "2023-08-29 01:38:30",
    source: "Lead Gen & CRM Marketplace",
    subPacks: ["Integration 1 - Tier 1", "Integration 2 - Tier 1"],
    monBillAmnt: "$350.0",
    genCrmStatus: "Connected",
    pandaDocStatus: "Connected",
    xeroStatus: "Connected",
    stripeStatus: "Active",
    jiraStatus: "",
    genCrmErrSts: "",
    pandaDocXeroErrSts: "",
    PandaDocJiraErrStatus: "",
  },
  {
    accHolderName: "Rakesh yung",
    phNo: "0432833765",
    email: "hendry@yopmail.com",
    company: "ABC  Holdings Ltd",
    country: "Australia",
    dateJoined: "2023-08-29 01:38:30",
    source: "Lead Gen & CRM Marketplace",
    subPacks: ["Integration 1 - Tier 1", "Integration 2 - Tier 1"],
    monBillAmnt: "$350.0",
    genCrmStatus: "Connected",
    pandaDocStatus: "Connected",
    xeroStatus: "Connected",
    stripeStatus: "Active",
    jiraStatus: "",
    genCrmErrSts: "",
    pandaDocXeroErrSts: "",
    PandaDocJiraErrStatus: "",
  },
  {
    accHolderName: "Raji Gupta",
    phNo: "0432833765",
    email: "hendry@yopmail.com",
    company: "ABC  Holdings Ltd",
    country: "Australia",
    dateJoined: "2023-08-29 01:38:30",
    source: "Lead Gen & CRM Marketplace",
    subPacks: ["Integration 1 - Tier 1", "Integration 2 - Tier 1"],
    monBillAmnt: "$350.0",
    genCrmStatus: "Connected",
    pandaDocStatus: "Connected",
    xeroStatus: "Connected",
    stripeStatus: "Active",
    jiraStatus: "",
    genCrmErrSts: "",
    pandaDocXeroErrSts: "",
    PandaDocJiraErrStatus: "",
  },
  {
    accHolderName: "karthi potter",
    phNo: "0432833765",
    email: "hendry@yopmail.com",
    company: "ABC  Holdings Ltd",
    country: "Australia",
    dateJoined: "2023-08-29 01:38:30",
    source: "Lead Gen & CRM Marketplace",
    subPacks: ["Integration 1 - Tier 1", "Integration 2 - Tier 1"],
    monBillAmnt: "$350.0",
    genCrmStatus: "Connected",
    pandaDocStatus: "Connected",
    xeroStatus: "Connected",
    stripeStatus: "Active",
    jiraStatus: "",
    genCrmErrSts: "",
    pandaDocXeroErrSts: "",
    PandaDocJiraErrStatus: "",
  },
  {
    accHolderName: "Gokul yung",
    phNo: "0432833765",
    email: "hendry@yopmail.com",
    company: "ABC  Holdings Ltd",
    country: "Australia",
    dateJoined: "2023-08-29 01:38:30",
    source: "Lead Gen & CRM Marketplace",
    subPacks: ["Integration 1 - Tier 1", "Integration 2 - Tier 1"],
    monBillAmnt: "$350.0",
    genCrmStatus: "Connected",
    pandaDocStatus: "Connected",
    xeroStatus: "Connected",
    stripeStatus: "Active",
    jiraStatus: "",
    genCrmErrSts: "",
    pandaDocXeroErrSts: "",
    PandaDocJiraErrStatus: "",
  },
];
const PhraseDivider = ({ data }) => {
  return (
    <>
      {data?.subPacks?.map((d) => {
        return <Typography style={{ whiteSpace: "nowrap" }}>{d}</Typography>;
      })}
    </>
  );
};
const CustomSwitch = ({ data }) => {
  return (
    <CustomSwitchWrapper>
      <Switch defaultChecked size="small" />
    </CustomSwitchWrapper>
  );
};

const ActionCreator = ({ data }) => {
  return (
    <ActionCreatorWrapper>
      <img src={DeleteIconRed} alt="red-icon" />
      <img src={FileMove} alt="file-move" />
      <CustomSwitchWrapper>
        <Switch size="small" />
      </CustomSwitchWrapper>

    </ActionCreatorWrapper>
  );
};
const tableData = [
  {
    field: "accHolderName",
    label: "Account Holder Name ",
  },
  {
    field: "phNo",
    label: "Phone Number",
  },
  {
    field: "email",
    label: "Email",
  },
  {
    field: "company",
    label: "Company",
  },
  {
    field: "country",
    label: "Country",
  },
  {
    field: "dateJoined",
    label: "Date Joined",
  },
  {
    field: "source",
    label: "Source",
  },
  {
    field: "subPacks",
    label: "Subscription Packs",
    render: (data) => <PhraseDivider data={data} />,
  },
  {
    field: "monBillAmnt",
    label: "Monthly Billing Amount",
    align: "center",
  },
  {
    field: "actions",
    label: "Actions",
    render: (data) => <ActionCreator data={data} />,
    align: "center",
  },
  {
    field: "unlocked",
    label: "Unlocked",
    render: (data) => <CustomSwitch data={data} />,
    align: "center",
  },
  {
    field: "genCrmStatus",
    label: "Lead Gen & CRM  Status",
    align: "center",
  },
  {
    field: "pandaDocStatus",
    label: "PandaDoc Status",
    align: "center",
  },
  {
    field: "xeroStatus",
    label: "Xero Status",
    align: "center",
  },
  {
    field: "stripeStatus",
    label: "Stripe Status",
    align: "center",
  },
  {
    field: "jiraStatus",
    label: "Jira Status",
    align: "center",
  },
  {
    field: "genCrmErrSts",
    label: "Lead Gen & CRM and PandaDoc Sync Error Status",
    align: "center",
  },
  {
    field: "pandaDocXeroErrSts",
    label: "PandaDoc and Xero Sync Error Status",
    align: "center",
  },
  {
    field: "PandaDocJiraErrStatus",
    label: "PandaDoc and Jira Sync Error Status",
    align: "center",
  },
];

const country = [
  {
    value: "Australia",
    label: "Australia",
  },
  {
    value: "India",
    label: "India",
  },
];


const UserComp = () => {
  const [apiTableData, setApiTableData] = useState(apiData)

  const tableFilter = (e) => {
    const { value } = e.target
    if (value) {
      const result = commonSearchFilter(apiData, value)
      setApiTableData(result)
    }
    else {
      setApiTableData(apiData)
    }
  }
  return (
    <UserCompWrapper>
      <div>
        <Typography component={"p"} variant="mainTitle" >
          Manage Accounts{" "}
        </Typography>
        <Divider sx={{ border: "solid 1px #5F6B79 !important" }} />
        <div className="parent-container">
          <div className="select-box-info">
            <Typography variant="title2" component={"div"} className="select-box">
              Select Country  <CustomSelect options={country} fullWidth />
            </Typography>

            <Typography variant="title2" component={"div"}>
              Total Accounts : 142{" "}
            </Typography>

            <Typography variant="title2" component={"div"}>
              Total Active Accounts : 141
            </Typography>
          </div>
          <div className="search-box-btn">
            <SearchBox onChange={tableFilter} />
            <div className="export-cv">
              <Typography variant="label">Export As CSV</Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="table-wrapper">
        <CustomTable
          tableData={tableData}
          apiData={apiTableData}
          addRowColor="#3E4B5C"
          evenRowColor="#50657C"
          textColor="#fff"
        />
        <CustomTablePagination />
      </div>
    </UserCompWrapper>
  );
};

export default UserComp;
