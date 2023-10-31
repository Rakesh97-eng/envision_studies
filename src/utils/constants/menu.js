import { PATH } from "./path";
import DashBoard from "../../assets/icons/dashboard.svg";
import UserProfile from "../../assets/icons/userProfile.svg";
import Mail from "../../assets/icons/mail.svg";

export const menuItems = [
  {
    itemText: "Dashboard",
    navPath: PATH.dashboard,
    activeText: "/dashboard",
    icon: DashBoard,
    isNested: [
      {
        itemText: "Integration 1",
        navPath: PATH.integration1,
        activeText: "/dashboard/integration1",
      },
      {
        itemText: "Integration 2",
        navPath: PATH.integration2,
        activeText: "/dashboard/integration2",
      },
      {
        itemText: "Integration 3",
        navPath: PATH.integration3,
        activeText: "/dashboard/integration3",
      },
    ],
  },
  {
    itemText: "Update Profile",
    navPath: PATH.updateProfile,
    activeText: "/update-profile",
    icon: UserProfile,
  },
  {
    itemText: "Invite Users",
    navPath: PATH.inviteUser,
    activeText: "/invite-users",
    icon: Mail,
  },
];
export const adminMenuItems = [
  {
    itemText: "Users",
    navPath: PATH.adminUsers,
    activeText: "/admin/users",
    icon: UserProfile,
  },
  {
    itemText: "Payment",
    navPath: PATH.adminPayment,
    activeText: "/admin/payment",
    icon: Mail,
  },
];
