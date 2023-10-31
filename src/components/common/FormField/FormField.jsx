/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { FormControl, InputAdornment, TextField } from "@mui/material";
import { forwardRef } from "react";
import { FormFieldWrapper } from "./FormField.Styles";

const FormField = forwardRef((props, ref) => {
  const {
    inputSx,
    fullWidth,
    variant = "outlined",
    dropdownProps,
    endLabel,
    startLabel,
    required,
    containerSx,
    sx,
    ...restProps
  } = props;

  return (
    <FormFieldWrapper>
      <FormControl fullWidth={fullWidth} sx={containerSx}>
        {required && <font color="red"> *</font>}
        <TextField
          required={required}
          variant={variant}
          sx={{ ...sx, minHeight: 20 }}
          InputProps={{
            endAdornment: (endLabel || dropdownProps) && endLabel && (
              <InputAdornment position="end">{endLabel}</InputAdornment>
            ),
            startAdornment: startLabel && (
              <InputAdornment position="start">{startLabel}</InputAdornment>
            ),
            sx: { ...inputSx },
            ...restProps.InputProps,
          }}
          inputRef={ref}
          {...restProps}
        />
      </FormControl>
    </FormFieldWrapper>
  );
});

export default FormField;
