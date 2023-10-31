import styled from "@emotion/styled";
import { COLORS } from "../../../themes/colors";
import { TableRow } from "@mui/material";

export const CustomTableContainer = styled("div")(({height}) => ({
  marginTop: "24px",
  ".MuiTableHead-root": {
    backgroundColor: "#4C73A7",
  },
  ".MuiTable-root": {
    minWidth: "auto",
  },
  ".MuiTableCell-root": {
    borderBottom: "none",
  },
  ".MuiTableRow-root": {
    // borderBottom: '1px solid #D1D1D1',
  },
  ".table-head-cell": {
    color: COLORS.text.primary,
    fontWeight: 700,
    fontSize: "14px",
    // fontFamily: FONT.w500,
    fontStyle: "normal",
    lineHeight: "24px",
    whiteSpace: "nowrap",
  },
  ".sort-icon": {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    whiteSpace: "nowrap",
    gap: "10px",
    ".rotate": {
      rotate: "180deg",
    },
  },
  ".table-cell": {
    // fontFamily: FONT.w500,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "24px",
    color: COLORS.text.black,
  },
  ".MuiTableContainer-root": {
    height: `${height}`,
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: "8px",
      height: "8px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#D9DDDF",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#689FC5",
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#689FC5",
    },
  },
}));

export const TableFooterWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  ".count-data": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    textAlign: "center",
    ".MuiTypography-root": {
      width: "100%",
    },
  },
  ".icons-container": {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "6px",
    cursor: "pointer",
  },
});

export const StyledTableRow = styled(TableRow)((props) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: `${props.addRowColor}`,
  },
  "&:nth-of-type(even)": {
    backgroundColor: `${props.evenRowColor}`,
  },
  ".table-cell": {
    color: `${props.textColor}`,
  },
}));
