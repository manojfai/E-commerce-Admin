import React from "react";
import { Button } from "antd";
import { PhoneFilled  } from '@ant-design/icons';

function AntButton({type,icon,style,onClick,BtnName}) {

  return (
    <div>
       <Button
       type={type}
       icon={icon}
       style={style}
       onClick={onClick}
       >{BtnName}</Button>
    </div>
  );
}

export default AntButton;
