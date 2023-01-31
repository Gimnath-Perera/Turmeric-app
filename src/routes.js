import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdHighQuality,
  MdHome,
  MdLock,
  MdAutoGraph,
  MdAddModerator,
  MdOutlineAgriculture,
  MdBugReport,
  MdOutlineWaterDrop,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import Profile from "views/admin/profile";
import DrynessDetection from "views/admin/dryness-detection";
import DataTables from "views/admin/dataTables";
import QualityAnalyze from "views/admin/quality-analyze";
import DiseaseAnalyze from "views/admin/disease-analyze";
import YieldPrediction from "views/admin/yield";

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

  {
    name: "Growth Curve",
    layout: "/admin",
    isVisibleInSidebar: true,
    icon: <Icon as={MdAutoGraph} width="20px" height="20px" color="inherit" />,
    path: "/data-tables",
    component: DataTables,
  },
  {
    name: "Yield Prediction",
    layout: "/admin",
    path: "/yield",
    isVisibleInSidebar: true,
    icon: (
      <Icon
        as={MdOutlineAgriculture}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: YieldPrediction,
  },
  {
    name: "Dryness Identification",
    layout: "/admin",
    path: "/dryness-detection",
    isVisibleInSidebar: true,
    icon: (
      <Icon
        as={MdOutlineWaterDrop}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: DrynessDetection,
  },
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
    name: "Disease Identification",
    layout: "/admin",
    path: "/disease-analyze",
    isVisibleInSidebar: true,
    icon: <Icon as={MdBugReport} width="20px" height="20px" color="inherit" />,
    component: DiseaseAnalyze,
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
