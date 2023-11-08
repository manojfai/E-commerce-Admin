import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Layout from "../pages/Layout/index";

// const Layout = React.lazy(() => import("../pages/Layout/index"));

// Branch Screens

const Br_Dashboard = React.lazy(() =>
  import("../pages/Branch/Dashboard/index")
);

const Br_Products = React.lazy(() => import("../pages/Branch/Products/index"));

// Merchant Screens

const Mer_Dashboard = React.lazy(() =>
  import("../pages/Merchant/Dashboard/index")
);

const Mer_Products = React.lazy(() =>
  import("../pages/Merchant/Products/index")
);

let auth = "admin";

const Routers = () => {
  const BranchRoutes = [
    { path: "/", component: <Br_Dashboard /> },
    { path: "/Products", component: <Br_Products /> },
  ];

  const MerchantRoutes = [
    { path: "/", component: <Mer_Dashboard /> },
    { path: "/Products", component: <Mer_Products /> },
  ];

  return (
    <Layout
      BranchRoutes={BranchRoutes}
      MerchantRoutes={MerchantRoutes}
      auth={auth}
    />
  );
};

export default Routers;
