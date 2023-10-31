/* eslint-disable react/prop-types */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import {
  CustomTableContainer,
  StyledTableRow,
  TableFooterWrapper,
} from "./CustomTable.Styles";

const SortableColumn = ({ td, arrowColor }) => {
  const [toggle, setToggle] = useState(false);
  const isSort = td?.sortColumn ? true : false;
  const handleSort = () => {
    setToggle(!toggle);
    isSort && td?.sortColumn(td);
  };
  return (
    <TableCell align="left" className="table-head-cell" onClick={handleSort}>
      <div className="sort-icon">
        {td.label}{" "}
        {isSort && (
          <ArrowDownwardIcon
            style={{ color: arrowColor }}
            className={toggle ? "rotate" : ""}
          />
        )}
      </div>
    </TableCell>
  );
};
const CustomTable = ({
  tableData,
  apiData,
  primaryKey,
  handleRowClick,
  tableFooter = false,
  arrowColor = "#1565C0",
  handleRefreshClick,
  addRowColor = "#F5747F",
  evenRowColor = "#FF8C94",
  textColor = "#000",
  customHeight = "100%",
}) => {
  return (
    <CustomTableContainer height={customHeight}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {tableData.map((td) => {
                return (
                  <SortableColumn
                    td={td}
                    key={td.field}
                    arrowColor={arrowColor}
                  />
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {apiData.map((apiTd) => {
              return (
                <StyledTableRow
                  key={apiTd[primaryKey]}
                  onClick={() => {
                    handleRowClick?.(apiTd);
                  }}
                  addRowColor={addRowColor}
                  evenRowColor={evenRowColor}
                  textColor={textColor}
                >
                  {tableData.map((td) => {
                    const res = td?.render
                      ? td.render(apiTd)
                      : apiTd?.[td.field]?.length > 0
                      ? apiTd?.[td.field]
                      : "-";
                    const align = td?.align ? td?.align : "left";
                    return (
                      <TableCell
                        key={td[primaryKey]}
                        align={align}
                        className="table-cell"
                        variant="regular"
                      >
                        {res}
                      </TableCell>
                    );
                  })}
                </StyledTableRow>
              );
            })}
          </TableBody>
          {tableFooter && (
            <TableFooter>
              <StyledTableRow>
                <TableCell colSpan={tableData.length}>
                  <TableFooterWrapper>
                    <div className="count-data">
                      <Typography>{apiData.length} results</Typography>
                    </div>
                    <div className="icons-container">
                      <ReplayOutlinedIcon onClick={handleRefreshClick} />
                    </div>
                  </TableFooterWrapper>
                </TableCell>
              </StyledTableRow>
            </TableFooter>
          )}
        </Table>
      </TableContainer>
    </CustomTableContainer>
  );
};
export default CustomTable;
