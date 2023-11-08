import React from "react";
import { images } from "../../../utils/images";
import "./style.scss";

function Header({ headMenuName, setHeadMenu }) {
  return (
    <>
      <div className="fm_bg_header">
        <div style={{ display: "flex" }}>
          <div className="fm_header_flex1">
            <img
              src={images.fm_menu_ic}
              className="fm_menu_img"
              onClick={() => setHeadMenu("Dashboard")}
            />
          </div>
          <div className="fm_header_flex2">
            <div className="fm_header_text">{headMenuName}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
