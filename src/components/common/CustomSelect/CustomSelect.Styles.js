import { styled } from '@mui/material';
import { COLORS } from '../../../themes/colors';

const AutoCompleteWrapper = styled('div')({
  width: '300px',
  '.MuiOutlinedInput-root': {
    padding: '0px',
  },
  '.MuiOutlinedInput-input':{
    padding:'12px',
  },
  '.MuiOutlinedInput-notchedOutline':{
    borderColor:COLORS.border.darkGray
  },
  '.MuiSelect-icon':{
    color:COLORS.text.primary
  },
});

export default AutoCompleteWrapper;
