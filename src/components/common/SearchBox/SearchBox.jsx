/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-boolean-value */
import { useRef, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { SearchBoxContainer } from "./SearchBox.Styles";
import IconSearch from "../../../assets/icons/icon-search.svg";

export default function SearchBox({ onChange, value }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <SearchBoxContainer>
      <Paper component="form" className="searchBox-paper" sx={{maxWidth: "320px"}}>
        <InputBase
          sx={{ ml: 1, flex: 1, }}
          placeholder="Search"
          inputProps={{ "aria-label": "search google maps" }}
          fullWidth
          value={value}
          onChange={onChange}
          inputRef={inputRef}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <img src={IconSearch} />
        </IconButton>
      </Paper>
    </SearchBoxContainer>
  );
}
