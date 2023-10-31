/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import { Home, Settings, Dashboard } from "@mui/icons-material";
import envisionLogo from "../../../assets/images/envisionLogo.png";
import { CustomDrawerWrapper } from "./SideBar.Styles";
import GreenTick from "../../../assets/icons/greenTick.svg";
import RightIcon from "../../../assets/icons/rightIcon.svg";
import Logout from "../../../assets/icons/logout.svg";

import { PATH } from "../../../utils/constants/path";
import { IntegrationContext } from "../../integrationContext/IntegrationContext";

const SingleList = ({ menuItems }) => {
  const { itemText, navPath, activeText } = menuItems;
  const isActive = (path) => {
    return location.pathname === path;
  };
  return (
    <ListItemButton
      component={Link}
      to={navPath}
      selected={isActive(activeText)}
      className="single-list"
    >
      <ListItemIcon>
        <img src={menuItems.icon} alt="logo" />
      </ListItemIcon>
      <ListItemText primary={itemText} />
    </ListItemButton>
  );
};
const MultipleList = ({ menuItems }) => {
  const { isCompleted } = useContext(IntegrationContext);
  const [parentHighLight, setParentHighLight] = useState(false);
  const { itemText, navPath } = menuItems;
  const isActive = (path) => {
    return location.pathname === path;
  };
  const highlightParent = (path) => {
    setParentHighLight(path.includes("dashboard"));
  };
  useEffect(() => {
    setParentHighLight(location.pathname.includes("dashboard"));
  }, [location.pathname]);
  return (
    <>
      <ListItemButton
        to={navPath}
        selected={parentHighLight}
        className="multi-list"
      >
        <ListItemIcon>
          <img src={menuItems.icon} alt="logo" />
        </ListItemIcon>
        <ListItemText primary={itemText} />
      </ListItemButton>
      <Collapse in={true} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {menuItems.isNested.map((nestedItem, index) => {
            const { itemText, navPath, activeText } = nestedItem;
            return (
              <ListItemButton
                component={Link}
                to={navPath}
                selected={isActive(activeText)}
                style={{ paddingLeft: 16 }}
                key={`${index}-item`}
                className="nested-list"
                onClick={() => {
                  highlightParent(navPath);
                }}
              >
                <img src={RightIcon} alt="right-icon" />
                <ListItemText primary={itemText} />
                {isCompleted.includes(index) ? (
                  <img src={GreenTick} alt="tick-icon" />
                ) : (
                  <></>
                )}
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </>
  );
};

const CustomSideBar = ({ menuItems }) => {
  return (
    <CustomDrawerWrapper>
      <div className="image-container">
        <img src={envisionLogo} alt="logo" />
      </div>
      <List className="main-list">
        {menuItems?.map((userMenuItem, index) => {
          return userMenuItem.isNested ? (
            <MultipleList menuItems={userMenuItem} key={index} />
          ) : (
            <SingleList menuItems={userMenuItem} key={index} />
          );
        })}
      </List>
      {/* <div className="logout-image-container">
        <img src={Logout} alt="logout-icon" />
      </div> */}
    </CustomDrawerWrapper>
  );
};

export default CustomSideBar;
