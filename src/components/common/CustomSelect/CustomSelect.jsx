import { FormControl, FormLabel, MenuItem, Select } from '@mui/material';
import { useRef, useState, useEffect } from 'react';
import AutoCompleteWrapper from './CustomSelect.Styles';


function CustomSelect(props) {
  const selectRef = useRef(null);
  const [paperWidth, setPaperWidth] = useState(null);
  const {
    label,
    fullWidth,
    variant = 'outlined',
    required,
    labelStyle,
    containerSx,
    options,
    value,
    onChange,
    ...restProps
  } = props;
  useEffect(() => {
    if (selectRef.current) {
      const selectWidth = selectRef.current.clientWidth;
      setPaperWidth(selectWidth);
    }
  }, []);
  return (
    <AutoCompleteWrapper>
      <FormControl fullWidth={fullWidth} sx={containerSx}>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={value}
          onChange={onChange}
          autoWidth
          fullWidth
          ref={selectRef}
          {...restProps}
          MenuProps={{
            PaperProps: {
              style: {
                minWidth: paperWidth,
              },
            },
          }}
        >
          {options?.map((data) => (
            <MenuItem value={data?.value}>{data?.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </AutoCompleteWrapper>
  );
}
export default CustomSelect;
