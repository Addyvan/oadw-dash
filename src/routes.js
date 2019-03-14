import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import DefaultLayout from "./layouts/Default";

// Route Views
import Overview from "./containers/Overview";
import NewCollab from "./containers/NewCollab";
import CollabCareerMP from "./containers/CollabCareerMP";
import ConnexCareerMP from "./containers/ConnexCareerMP";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/overview" />
  },
  {
    path: "/overview",
    layout: DefaultLayout,
    component: Overview
  },
  {
    path: "/collab-careermp",
    layout: DefaultLayout,
    component: CollabCareerMP
  },
  {
    path: "/connex-careermp",
    layout: DefaultLayout,
    component: ConnexCareerMP
  },
  {
    path: "/newcollab",
    layout: DefaultLayout,
    component: NewCollab
  },
];