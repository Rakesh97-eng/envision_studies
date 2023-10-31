import React, { useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import DeleteIcon from "@mui/icons-material/Delete";
import "./index.css";
const InviteUserComp = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [emailFields, setEmailFields] = useState([
    { id: 1, value: "", isAddButtonVisible: true },
  ]);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#4C73A7", // Set your desired background color
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      color: "white",
    },
    borderBottom: "0px solid #4C73A7",
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "#3E4B5C",
    },
    "&:nth-of-type(even)": {
      backgroundColor: "#50657C", // Set the background color for even rows
    },
    // hide last border
    "& > *": {
      borderBottom: "0px solid #4C73A7", // Border color for all cells
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(name, calories) {
    return { name, calories };
  }

  const rows = [
    createData(
      "johndoe@gmail.com",
      <DeleteIcon sx={{ cursor: "pointer", color: "red" }} />
    ),
    createData(
      "hendry@gmail.com",
      <DeleteIcon sx={{ cursor: "pointer", color: "red" }} />
    ),
    createData(
      "cristina@yopmail.com",
      <DeleteIcon sx={{ cursor: "pointer", color: "red" }} />
    ),
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const addEmailField = () => {
    const newEmailField = {
      id: Date.now(),
      value: "",
      isAddButtonVisible: false,
    };
    setEmailFields([...emailFields, newEmailField]);
  };

  // Function to remove a text field by its id
  const removeEmailField = (id) => {
    setEmailFields(emailFields.filter((field) => field.id !== id));
  };

  return (
    <div>
      <div className="invite-card">
        <div className="invite-head">
          <div className="icon">
            <MailIcon sx={{ fontSize: "60px" }} />
          </div>
          <div className="content">
            <h4 sx={{ margin: "0px" }}>Invite Users</h4>
            <p>
              Invite others in your organization to create{" "}
              <span style={{ color: "#16BEEB", fontWeight: "600" }}>
                {" "}
                envision
              </span>
              <span style={{ color: "#F79E1B", fontWeight: "600" }}>L</span>
              <span style={{ color: "#16BEEB", fontWeight: "600" }}>X</span>
              <span style={{ color: "#68C337", fontWeight: "600" }}>P</span>
              <span style={{ color: "#0052CC", fontWeight: "600" }}>
                J
              </span>{" "}
              account
            </p>
          </div>
        </div>
        <hr style={{ marginTop: "0px" }} />
        <div style={{ marginBottom: "2rem" }}>
          <p>
            This will create an envisionLXPJ accounts linked to your current
            account
          </p>
        </div>

        <div className="Email-card">
          {emailFields.map((emailField, index) => (
            <div key={emailField.id} style={{ marginBottom: "1rem" }}>
              <TextField
                id={`outlined-basic-${emailField.id}`}
                variant="outlined"
                placeholder="Email"
                className="Email-input"
                value={emailField.value}
                onChange={(e) => {
                  const updatedEmailFields = emailFields.map((field) =>
                    field.id === emailField.id
                      ? { ...field, value: e.target.value }
                      : field
                  );
                  setEmailFields(updatedEmailFields);
                }}
              />
              {emailField.isAddButtonVisible ? (
                <button className="email-add-btn" onClick={addEmailField}>
                  Add Email
                </button>
              ) : (
                <CloseIcon
                  onClick={() => removeEmailField(emailField.id)}
                  style={{}}
                  className="close-icon"
                />
              )}
            </div>
          ))}
          <button className="send-invite-btn">Send Invite</button>
        </div>

        <div className="Invite-table">
          <Paper
            sx={{ width: "100%", overflow: "hidden", borderRadius: "10px" }}
          >
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow className="Invite-tablerow" >
                    <StyledTableCell>Email</StyledTableCell>
                    <StyledTableCell>Actions</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell>{row.calories}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{
              margin: "1rem",
              color: "white",
              "& .MuiSvgIcon-root": {
                color: "white", // Icon color
              },
              "& .MuiTablePagination-selectLabel": {
                marginTop: "auto", //pagination rows align
              },
              "& .MuiTablePagination-displayedRows": {
                marginTop: "auto", //pagination rows align
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default InviteUserComp;
