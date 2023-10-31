import { PATH } from "../../utils/constants/path";
import IntegrationOne from "../../pages/user/dashboard/integrationOne/IntegrationOne";
import IntegrationTwo from "../../pages/user/dashboard/integrationTwo/IntegrationTwo";
import IntegrationThree from "../../pages/user/dashboard/integrationThree/IntegrationThree";
import UpdateProfile from "../../pages/user/userProfile/UserProfile";
import InviteUser from "../../pages/user/inviteUser/InviteUser";
import RegisterPage from "../../pages/user/registerPage/RegisterPage";
import ForgotPassword from "../common/forget/ForgotPassword";
import LoginPage from "../common/login/LoginPage";
import Users from "../../pages/admin/dashboard/user/Users";
import Payment from "../../pages/admin/dashboard/payment/Payment";
import UserLoginPage from "../../pages/user/login/userlogin";
import AdminLoginPage from "../../pages/admin/adminlogin/adminlogin";

export const adminRoutes = [
  {
    path: PATH.adminUsers,
    Component: Users,
    key: "admin-users",
    isAdmin: true,
  },
  {
    path: PATH.adminPayment,
    Component: Payment,
    key: "admin-payment",
    isAdmin: true,
  },
];

export const userRoutes = [
  {
    path: PATH.integration1,
    Component: IntegrationOne,
    key: "integration1",
  },
  {
    path: PATH.integration2,
    Component: IntegrationTwo,
    key: "integration2",
  },
  {
    path: PATH.integration3,
    Component: IntegrationThree,
    key: "integration3",
  },
  {
    path: PATH.updateProfile,
    Component: UpdateProfile,
    key: "UserProfile",
  },
  {
    path: PATH.inviteUser,
    Component: InviteUser,
    key: "UserInvite",
  },
];

export const publicRoutes = [
  {
    path: PATH.adminLogin,
    component: AdminLoginPage,
    key: "LoginPage",
    isPublic: true,
  },
  {
    path: PATH.userLogin,
    component: UserLoginPage,
    key: "LoginPage",
    isPublic: true,
  },
  {
    path: PATH.userRegister,
    component: RegisterPage,
    key: "RegisterPage",
    isPublic: true,
  },
  {
    path: PATH.forget,
    component: ForgotPassword,
    key: "ForgotPassword",
    isPublic: true,
  },
  {
    path: PATH.adminForget,
    component: ForgotPassword,
    key: "adminForgotPassword",
    isPublic: true,
  },
];

export const privateRoutes = [...adminRoutes, ...userRoutes];
