import { styled } from "@mui/material";
import { COLORS } from "../../../themes/colors";

export const CustomDrawerWrapper=styled('div')({
    '.MuiListItemIcon-root':{
// minWidth:36,
    },
    ".image-container":{
        display:"flex",
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        img:{
            width:'80%',
            },
        },
    width:'90%',
    '.MuiCollapse-wrapper':{
        '.MuiList-root':{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }
    },
  '.single-list':{
    marginTop:'10px',
    '.MuiTypography-root':{
        color:COLORS.text.primary,
        fontSize:20,
        fontWeight: 700
    },
        '&.Mui-selected':{
            backgroundColor:`${COLORS.background.skyBlue }!important`,
            borderRadius:'0px 30px 30px 0px'
        }, 
  },
  '.multi-list':{
    marginTop:'10px',
    '.MuiTypography-root':{
        color:COLORS.text.primary,
        fontSize:20,
        fontWeight: 700
    },
        '&.Mui-selected':{
            backgroundColor:COLORS.background.skyBlue,
            borderRadius:'0px 30px 30px 0px'
        }, 
        
  },
  '.nested-list':{
    width:"250px",
    '&.Mui-selected':{
        '.MuiTypography-root':{
            color:COLORS.background.skyBlue,
            fontSize:16,
            fontWeight: 700,
            marginLeft:21,
            marginRight:26,
        }, 
    }, 
    '.MuiTypography-root':{
        color:COLORS.text.primary,
        fontSize:16,
        fontWeight: 700,
        marginLeft:21,
        marginRight:26,
    }, 
    
},
   '.logout-image-container':{
    position: 'absolute',
    bottom: 20,
    paddingLeft: '24px',
   },
   '.main-list':{
paddingTop:'24px',
   }
})