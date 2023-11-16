import React, { Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Layout from '../pages/Layout/index';

// const Layout = React.lazy(() => import("../pages/Layout/index"));

// Branch Screens

const Br_Dashboard = React.lazy(() => import('../pages/Branch/Dashboard/index'));
const Br_Products = React.lazy(() => import('../pages/Branch/Products/index'));

// Merchant Screens

const Mer_Dashboard = React.lazy(() => import('../pages/Merchant/Dashboard/index'));
const Mer_Product = React.lazy(() => import('../pages/Merchant/Products/index'));
const Mer_ProductsCombo = React.lazy(() => import('../pages/Merchant/Catelog/ProductCombo/index'));
const Mer_Collections = React.lazy(() => import('../pages/Merchant/Catelog/Collections/index'));
const Mer_Products = React.lazy(() => import('../pages/Merchant/Catelog/Product/index'));
const Mer_Createproduct = React.lazy(() => import('../pages/Merchant/Catelog/Product/create'));
const Mer_Createproductcombo = React.lazy(() => import('../pages/Merchant/Catelog/ProductCombo/create'));
const Mer_Createcollections = React.lazy(() => import('../pages/Merchant/Catelog/Collections/create'));

// User Management (Setting) Screens

const User_SettingPasswordReset = React.lazy(() => import('../pages/Settings/ResetPassword/SettingPasswordReset'));

let auth = 'admin';

const Routers = () => {
  const BranchRoutes = [
    { path: '/', component: <Br_Dashboard /> },
    { path: '/Products', component: <Br_Products /> }
  ];

  const MerchantRoutes = [
    { path: '/', component: <Mer_Dashboard /> },
    { path: '/Product', component: <Mer_Product /> },
    { path: '/products', component: <Mer_Products /> },
    { path: '/productcombo', component: <Mer_ProductsCombo /> },
    { path: '/collections', component: <Mer_Collections /> },
    { path: '/products/create', component: <Mer_Createproduct /> },
    { path: '/productcombo/create', component: <Mer_Createproductcombo /> },
    { path: '/collections/create', component: <Mer_Createcollections /> }
  ];

  const UserManagementSettingRoutes = [{ path: '/settings/password/reset', component: <User_SettingPasswordReset /> }];

  return (
    <Layout
      BranchRoutes={BranchRoutes}
      MerchantRoutes={MerchantRoutes}
      UserManagementSettingRoutes={UserManagementSettingRoutes}
      auth={auth}
    />
  );
};

export default Routers;
