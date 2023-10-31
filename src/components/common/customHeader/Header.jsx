/* eslint-disable react/prop-types */
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { HeaderWrapper } from "./header.style";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import logoutIcon from "../../../assets/icons/logout.svg"
import { useNavigate } from "react-router-dom";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
    
  };
}

function HeaderTabs(props) {
  const { Tabcontent1, Tabcontent2, Tabcontent3, Tabcontent4, HeaderData,TabValue,TabIndex,HeaderTabChange } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  let navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleprofileClick = (path) => {
    navigate(path)
    setAnchorEl(null);
  };
  const handleChange = (event, newValue) => {
    if(TabIndex.includes(newValue)){
      HeaderTabChange(newValue)
    }
    // setValue(newValue);
  };

  const indicatorStyle = {
    backgroundColor: " #DC922D",
    height: "5px",
    borderRadius: "5px",
    // color:"#16BEEB"
  };


  return (
    <HeaderWrapper>
      <Box sx={{ width: "100%" }}>
        <div className="HeaderBox">
          <Tabs
            value={TabValue}
            onChange={handleChange}
            TabIndicatorProps={{ style: indicatorStyle }}
            aria-label="basic tabs example"
            
          >
            {HeaderData?.map((data, index) => {
              let isTrue = TabIndex.includes(index+1)
              return (
                <Tab
                  key={index}
                  label={data.label}
                  icon={
                    isTrue? (
                      <CheckCircleIcon />
                    ) : (
                      <AddCircleIcon />
                    )
                  }
                  {...a11yProps(index)}
                  className={
                    isTrue ? "childtabcomplete" : "childtab"
                  }
                  // style={{ flex: 1 }}
                />
              );
            })}
          </Tabs>
          <AccountCircleIcon onClick={handleClick}  className="boxicon" />
          <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={()=>setAnchorEl(null)}
         onClick={()=>setAnchorEl(null)}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              // content: '',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={()=>handleprofileClick('/update-profile')}>
          <Avatar/> Update Profile
        </MenuItem>
        <MenuItem onClick={()=>handleprofileClick('/')}>
         <div>
            <img src={logoutIcon} alt="#" style={{ cursor: "pointer",height:"25px" }} />
          </div>
          <div style={{paddingLeft:"10px"}}>
            Sign Out
          </div>
        </MenuItem>
      </Menu>
        </div>
        <CustomTabPanel value={TabValue} index={0}>
          {Tabcontent1}
        </CustomTabPanel>
        <CustomTabPanel value={TabValue} index={1}>
        {Tabcontent2}
        </CustomTabPanel>
        <CustomTabPanel value={TabValue} index={2}>
        {Tabcontent3}
        </CustomTabPanel>
        <CustomTabPanel value={TabValue} index={3}>
        {Tabcontent4}
        </CustomTabPanel>
      </Box>
    </HeaderWrapper>
  );
}

export default HeaderTabs;
