import { Typography } from '@mui/material';
import React from 'react'
import logoutIcon from "../../../assets/icons/logout.svg";
import envisionLogo from "../../../assets/images/envisionLogo.png";
import edIsoLogo from "../../../assets/images/ED-ISO-Logo.png";
import leadGenLogo from "../../../assets/images/LeadGen&CRM-Badge-logo.png";
import xeroLogo from "../../../assets/images/xero.png";
import pandaDocLogo from "../../../assets/images/panda-doc-logo.png";
import stripeLogo from "../../../assets/images/Stripe-partner.png";
import jiraLogo from "../../../assets/images/jira.png";
import { useNavigate } from 'react-router-dom';

const FooterCompAdmin = () => {
    const navigate = useNavigate();
    const handleNavigation = (navpath)=>{
      navigate(navpath)
    }
  return (
    <div className='footer' style={{ backgroundColor: "#3E4B5C", padding: "2rem 2rem", width: "100%" }}>
      <div className='row' style={{ width: "100%" }}>
        <div className='col-lg-1' style={{ display: "flex", alignItems: "end" }}>
          <div>
            <img onClick={()=>handleNavigation('/')} src={logoutIcon} alt="#" style={{ cursor: "pointer", height: "25px" }} />
          </div>
        </div>
        <div className='col-lg-2' >
          <div className='logo-bar' >
            <div>
              <img src={envisionLogo} alt="#" style={{ margin: "auto", width: "100%", cursor: "pointer" }} />
            </div>
          </div>
        </div>
        <div className='col-lg-1'>&nbsp;</div>
        <div className='col-lg-2'>
          <Typography variant="title2" component={"div"} sx={{ color: "white", marginBottom: "15px" }}>
            Navigation
          </Typography>

          <Typography variant="title2" component={"div"} sx={{ color: "#16BEEB", cursor: "pointer", fontSize: "16px",marginBottom:"5px" }}>
            Users
          </Typography>
          <Typography variant="title2" component={"div"} sx={{ color: "#16BEEB", cursor: "pointer", fontSize: "16px",marginBottom:"5px" }}>
            Payments
          </Typography>
         
        </div>
        <div className='col-lg-2'>
          <Typography variant="title2" component={"div"} sx={{ color: "white", marginBottom: "15px" }}>
            Powered by
          </Typography>

          <img src={edIsoLogo} alt="" style={{ width: "100%", cursor: "pointer" }} />
        </div>
        <div className='col-lg-1'>&nbsp;</div>

        <div className='col-lg-3'>
          <Typography variant="title2" component={"div"} sx={{ color: "white", marginBottom: "15px" }}>
            Official Partners
          </Typography>
          <div className='partners-logo' style={{ display: "flex" }}>
            <div >
              <img src={leadGenLogo} alt="#" style={{ height: "60px", marginRight: "10px", cursor: "pointer" }} />
            </div>
            <div >
              <img src={pandaDocLogo} alt="" style={{ height: "60px", marginRight: "5px", cursor: "pointer" }} />
            </div>
            <div >
              <img src={xeroLogo} alt="" style={{ height: "65px", marginRight: "5px", cursor: "pointer" }} />
            </div>
          </div>
          <div className='partners-logo' style={{ display: "flex",marginTop:"1rem" }}>
            <div >
              <img src={stripeLogo} alt="" style={{ height: "30px", cursor: "pointer",marginRight:"5px" }} />
            </div>
            <div>
              <img src={jiraLogo} alt="" style={{ height: "30px", width: "100%", cursor: "pointer" }} />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default FooterCompAdmin