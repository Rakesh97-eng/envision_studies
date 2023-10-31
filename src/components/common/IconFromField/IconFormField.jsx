/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-boolean-value */
import { useRef, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import IconSearch from "../../../assets/icons/icon-search.svg";
import { IConFormFieldContainer } from "./IconFormField.Styles";
import { Tooltip } from "@mui/material";

export default function IconFormField({
  onChange,
  value,
  iconSrc,
  isIconLeft = false,
  isIconRight = false,
  onIconClick,
  placeholder,
  toolTipContent=""
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <IConFormFieldContainer>
      <Paper
        component="form"
        className="field-paper"
        sx={{ maxWidth: "320px" }}
      >
        {isIconLeft && (
          <Tooltip title={toolTipContent} placement="top-start" className="tool-tip" >
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <img src={iconSrc} />
            </IconButton>
          </Tooltip>
        )}
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder={placeholder}
          inputProps={{ "aria-label": "search google maps" }}
          fullWidth
          value={value}
          onChange={onChange}
          inputRef={inputRef}
        />
        {isIconRight && (
          <Tooltip title={toolTipContent} placement="right">
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <img src={iconSrc} />
            </IconButton>
          </Tooltip>
        )}
      </Paper>
    </IConFormFieldContainer>
  );
}
