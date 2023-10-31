/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { FormControl, InputAdornment, TextField } from "@mui/material";
import { forwardRef, useState } from "react";
import { PasswordFieldWrapper } from "./InputPassword.Styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const PasswordField = forwardRef((props, ref) => {
  const {
    fullWidth,
    variant = "outlined",
    required,
    containerSx,
    sx,
    ...restProps
  } = props;
  const [showPassword, setShowPassword] = useState(false);
  //   const handleMouseDownPassword = (event) => {
  //     event.preventDefault();
  //   };
  return (
    <PasswordFieldWrapper>
      <FormControl fullWidth={fullWidth} sx={containerSx}>
        {required && <font color="red"> *</font>}
        <TextField
          required={required}
          variant={variant}
          sx={{ ...sx, minHeight: 20 }}
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="end"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                {" "}
                {showPassword ? (
                  <Visibility sx={{ cursor: "pointer" }} />
                ) : (
                  <VisibilityOff sx={{ cursor: "pointer" }} />
                )}
              </InputAdornment>
            ),
          }}
          type={showPassword ? "text" : "password"}
          inputRef={ref}
          {...restProps}
        />
      </FormControl>
    </PasswordFieldWrapper>
  );
});

export default PasswordField;
