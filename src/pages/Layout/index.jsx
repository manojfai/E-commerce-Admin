import React, { useState } from 'react';
import Header from './Header/index';
import Sidebar from './sidebar/index';
import { HashRouter, Route, Routes } from 'react-router-dom';

function Layout({ BranchRoutes, MerchantRoutes, auth }) {
  const [headMenuName, setHeadMenu] = useState('Dashboard');
  const getRoutes = () => {
    return auth === 'admin' ? (
      <Routes>
        <Route path="/" element={BranchRoutes[0].component}></Route>
        <Route path="/Products" element={MerchantRoutes[1].component}></Route>
      </Routes>
    ) : (
      <Routes>
        <Route path="/" element={BranchRoutes[0].component}></Route>
        <Route path="/Products" element={MerchantRoutes[1].component}></Route>
      </Routes>
    );
  };

  return (
    <>
      <div>
        <HashRouter>
          <Header headMenuName={headMenuName} setHeadMenu={setHeadMenu} />
          <div style={{ display: 'flex' }}>
            <Sidebar headMenuName={headMenuName} setHeadMenu={setHeadMenu} />
            <div style={{
              backgroundColor:"#fafafa",
              width:"83%",padding:"1.8em"}}>{getRoutes()}</div>
          </div>
        </HashRouter>
      </div>
    </>
  );
}

export default Layout;
