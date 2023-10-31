/* eslint-disable react/prop-types */
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { CustomLabelWrapper, CustomTabPanelWrapper, TabWrapper } from "./Sync.Style";
import AutoSync from "./autoSync/AutoSync";
import IntegrationLogs from "./integrationlogs/Logs";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <CustomTabPanelWrapper
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ padding: '52px 28px' }}>{children}</Box>}
    </CustomTabPanelWrapper>
  );
}
function CustomLabel({ text, count }) {
  return (
    <CustomLabelWrapper>
      <span>{text}</span>
      <span className="count" style={{height:"15px",width:"15px",fontSize:"12px"}} >{count}</span>
    </CustomLabelWrapper>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Sync = ({syncData,apiTableData}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabWrapper>
      <Box sx={{ width: "100%" }}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="AUTO SYNC" {...a11yProps(0)} />
            <Tab
              label={<CustomLabel text="LOG" count={4} />}
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <AutoSync syncData={syncData}/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
         <IntegrationLogs apiTableData={apiTableData}/>
        </CustomTabPanel>
      </Box>
    </TabWrapper>
  );
};

export default Sync;
