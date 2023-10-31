import { TextField } from "@mui/material";
import { styled } from "@mui/system";

export const FormWrappper = styled(TextField)()({
    '.textfield':{
        display:"flex",
        alignItems: "center",
    }
,
    '.formCard':{
        margin:"3px"
    },

    '.textBox':{
        color: "#FFF",
        backgroundColor: "#323E4A",
        width: "auto%",
        input: {
          color: "#FFF",
        },
    },

  
    
})