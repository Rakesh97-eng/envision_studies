import { Divider, Typography } from "@mui/material";
import { PaymentCompWrapper } from "./PaymentComp.Styles";
import SearchBox from "../../common/SearchBox/SearchBox";
import CustomTable from "../../common/CustomTable/CustomTable";
import CustomTablePagination from "../../common/CustomPagination/CustomPagination";
import CustomSelect from "../../common/CustomSelect/CustomSelect";
const PhraseDivider = ({ data }) => {
  return (
    <>
      {data?.subPacks?.map((d) => {
        return <Typography style={{ whiteSpace: "nowrap" }}>{d}</Typography>;
      })}
    </>
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
    field: "subPacks",
    label: "Subscription Packs",
    render: (data) => <PhraseDivider data={data} />,
  },
  {
    field: "paidDate",
    label: "Payment Date ",
    align: "center",
  },
  {
    field: "paidAmount",
    label: "Paid Amount",
  },
];
const apiData = [
  {
    accHolderName: "Henry wong",
    phNo: "0432833765",
    email: "hendry@yopmail.com",
    company: "ABC  Holdings Ltd",
    country: "Australia",
    subPacks: ["Integration 1 - Tier 1", "Integration 2 - Tier 1"],
    paidDate: "2023-08-29 01:38:30",
    paidAmount: "$350.0",
  },
  {
    accHolderName: "Rakesh yung",
    phNo: "0432833765",
    email: "hendry@yopmail.com",
    company: "ABC  Holdings Ltd",
    country: "Australia",
    subPacks: ["Integration 1 - Tier 1", "Integration 2 - Tier 1"],
    paidDate: "2023-08-29 01:38:30",
    paidAmount: "$350.0",
  },
  {
    accHolderName: "Raji Gupta",
    phNo: "0432833765",
    email: "hendry@yopmail.com",
    company: "ABC  Holdings Ltd",
    country: "Australia",
    subPacks: ["Integration 1 - Tier 1", "Integration 2 - Tier 1"],
    paidDate: "2023-08-29 01:38:30",
    paidAmount: "$350.0",
  },
  {
    accHolderName: "karthi potter",
    phNo: "0432833765",
    email: "hendry@yopmail.com",
    company: "ABC  Holdings Ltd",
    country: "Australia",
    subPacks: ["Integration 1 - Tier 1", "Integration 2 - Tier 1"],
    paidDate: "2023-08-29 01:38:30",
    paidAmount: "$350.0",
  },
  {
    accHolderName: "Gokul yung",
    phNo: "0432833765",
    email: "hendry@yopmail.com",
    company: "ABC  Holdings Ltd",
    country: "Australia",
    subPacks: ["Integration 1 - Tier 1", "Integration 2 - Tier 1"],
    paidDate: "2023-08-29 01:38:30",
    paidAmount: "$350.0",
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
const PaymentComp = () => {
  return (
    <div>
      <PaymentCompWrapper>
        <div>
          <Typography component={"p"} variant="mainTitle">
            Payment Details{" "}
          </Typography>
          <Divider sx={{border:"solid 1px #5F6B79 !important" }}/>
          <div className="parent-container">
            <div className="select-box-info">
              <Typography variant="title2" component={"div"}>
                Select Country
              </Typography>{" "}
              <CustomSelect options={country} fullWidth />
            </div>
            <div className="search-box-btn">
              <SearchBox />
              <div className="export-cv">
                <Typography variant="label">Export As CSV</Typography>
              </div>
            </div>
          </div>
        </div>
        <div className="table-wrapper">
          <CustomTable
            tableData={tableData}
            apiData={apiData}
            addRowColor="#3E4B5C"
            evenRowColor="#50657C"
            textColor="#fff"
          />
          <CustomTablePagination />
        </div>
      </PaymentCompWrapper>


    </div>

  );
};

export default PaymentComp;
