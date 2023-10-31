import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import CustomSideBar from "../customSideBar/SideBar";
import { adminMenuItems, menuItems } from "../../../utils/constants/menu";
import Footer from "../../../pages/admin/dashboard/footer/Footer";
import FooterAdmin from "../../../pages/admin/dashboard/footer/AdminFooter";

const NavLayout = ({ isAdmin }) => {
  return (
    <Grid container >
      <Grid item xs={2.5}>
        <CustomSideBar menuItems={isAdmin ? adminMenuItems : menuItems} />
      </Grid>
      <Grid item xs={9.5}>
        <Outlet />
      </Grid>
      {isAdmin ? <FooterAdmin /> : <Footer />}
    </Grid>
  );
};
export default NavLayout;
