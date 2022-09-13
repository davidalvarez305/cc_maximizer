import React from "react";
import SidebarFlagIcon from "../SidebarFlagIcon";
import "./SidebarBalanceItem.css";

interface Props {
  link: string;
  icon: string;
}

const SidebarBalanceItem: React.FC<Props> = ({ link, icon }) => {
  return (
    <div className="navigation-web-sideb-10">
      <div className="lable">
        <SidebarFlagIcon src={icon} />
        <div className="link-3 lable--14px">{link}</div>
      </div>
    </div>
  );
};

export default SidebarBalanceItem;
