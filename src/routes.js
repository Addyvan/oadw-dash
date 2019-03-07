import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import DefaultLayout from "./layouts/Default";

// Route Views
import Overview from "./containers/Overview";
import NewCollab from "./containers/NewCollab";
import Collab from "./containers/Collab";

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
    path: "/collab",
    layout: DefaultLayout,
    component: Collab
  },
  {
    path: "/newcollab",
    layout: DefaultLayout,
    component: NewCollab
  },
];