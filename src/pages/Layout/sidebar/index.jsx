import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { images } from '../../../utils/images';
import SubMenuItem from './menuItem.json';
import './style.scss';

function Sidebar({ headMenuName, setHeadMenu }) {

  const navigate = useNavigate();
  const setMenuFlag = data => {
    setHeadMenu(data);
  };

  return (
    <>
      {headMenuName === 'Dashboard' ? (
        // Dashboard Menu Section
        <div className="fm_menu_bgcolor">
          <div className="fm_menu_disply">
            <div
              className={`fm_menu_flex fm_menu_box fm_menu_active`}
              onClick={() => {
                setMenuFlag('Dashboard');
              }}>
              <img src={images.fm_dashbaord_ic} className={`fm_menu_img fm_menu_active_img`} />
              <div className="fm_menu_text">Dashboard</div>
            </div>

            <div
              className="fm_menu_flex fm_menu_box"
              onClick={() => {
                setMenuFlag('Catalog');
                navigate("/products")
              }}>
              <img src={images.fm_catalog_ic} className="fm_menu_img" />
              <div className="fm_menu_text">Catalog</div>
            </div>
          </div>
          <div className="fm_menu_disply">
            <div
              className="fm_menu_flex fm_menu_box"
              onClick={() => {
                setMenuFlag('Orders');
              }}>
              <img src={images.fm_orders_ic} className="fm_menu_img" />
              <div className="fm_menu_text">Orders</div>
            </div>
            <div
              className="fm_menu_flex fm_menu_box"
              onClick={() => {
                setMenuFlag('Inventory');
              }}>
              <img src={images.fm_vendor_ic} className="fm_menu_img" />
              <div className="fm_menu_text">Inventory</div>
            </div>
          </div>
          <div className="fm_menu_disply">
            <div style={{ flex: 3 }}>
              <div
                className=" fm_menu_box"
                onClick={() => {
                  setMenuFlag('Settings');
                }}>
                <img src={images.fm_settings_ic} className="fm_menu_img" />
                <div className="fm_menu_text">Settings</div>
              </div>
            </div>
          </div>
        </div>
      ) : headMenuName === 'Catalog' ?
      <div className="fm_menu_bgcolor">
          <div className="fm_menu_submenu">
            {SubMenuItem.catelog.map((data, i) => (
              <Link to={data.to}>
                <div className="fm_menu_submenu_item">{data.name}</div>
              </Link>
            ))}
          </div>
        </div>
      :(
        <div className="fm_menu_bgcolor">
          <div className="fm_menu_submenu">
            {SubMenuItem.Products.map((data, i) => (
              <Link to={data.name}>
                <div className="fm_menu_submenu_item">{data.name}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
