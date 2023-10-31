import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Typography from "@mui/material/Typography";
import { CustomCardWrapper } from "./SubscriptionCard.style";


export default function SubscriptioncCard(props) {
    const{ChildCardText,ChildContentText}=props
  return (
    <CustomCardWrapper>
      <Card className="cardcontainer">
        <div className="childcard">
            <Typography sx={{fontWeight:"600"}}>
                {ChildCardText.title}
            </Typography>
            <Typography sx={{fontWeight:"600"}}>
                {ChildCardText.titleText}
            </Typography>
        </div>
        <CardContent>
         
         {ChildContentText.map((content,index)=>{
            return <Typography key={index}
            sx={{
              fontSize: 16,
              color: "white",
              fontWeight:400,
              verticalAlign: "middle",
              display: "flex",
              marginLeft:"3%",
              alignItems:"center",
              paddingBottom:"10px"
            }}
            color="text.secondary"
            gutterBottom
          >
            <CheckCircleOutlineIcon  style={{marginRight:"7px"}}/>
               {content?.label}
          </Typography>
         }) }
        </CardContent>
      </Card>
    </CustomCardWrapper>
  );
}
