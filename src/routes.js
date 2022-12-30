import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdHighQuality,
  MdHome,
  MdLock,
  MdShoppingCart,
  MdAutoGraph,
  MdAddModerator,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import QualityAnalyze from "views/admin/quality-analyze";

// Auth Imports
import SignInCentered from "views/auth/signIn";
import SignUpCentered from "views/auth/register";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "/default",
    isVisibleInSidebar: true,
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
  // {
  //   name: "Knowledge Delivery",
  //   layout: "/admin",
  //   path: "/nft-marketplace",
  //   isVisibleInSidebar: true,
  //   icon: (
  //     <Icon as={MdShoppingCart} width="20px" height="20px" color="inherit" />
  //   ),
  //   component: NFTMarketplace,
  //   secondary: true,
  // },
  {
    name: "Growth Curve",
    layout: "/admin",
    isVisibleInSidebar: true,
    icon: <Icon as={MdAutoGraph} width="20px" height="20px" color="inherit" />,
    path: "/data-tables",
    component: DataTables,
  },
  // {
  //   name: "Yield Prediction",
  //   layout: "/admin",
  //   path: "/profile",
  //   icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  //   component: Profile,
  // },
  {
    name: "Quality Identification",
    layout: "/admin",
    path: "/quality-analyze",
    isVisibleInSidebar: true,
    icon: (
      <Icon as={MdHighQuality} width="20px" height="20px" color="inherit" />
    ),
    component: QualityAnalyze,
  },
  {
    name: "Fraud Identification",
    layout: "/admin",
    path: "/profile",
    isVisibleInSidebar: true,
    icon: (
      <Icon as={MdAddModerator} width="20px" height="20px" color="inherit" />
    ),
    component: Profile,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    isVisibleInSidebar: false,
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: SignInCentered,
  },
  {
    name: "Register",
    layout: "/auth",
    path: "/register",
    isVisibleInSidebar: false,
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: SignUpCentered,
  },
];

export default routes;
