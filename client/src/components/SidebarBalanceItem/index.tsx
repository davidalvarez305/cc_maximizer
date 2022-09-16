import React from "react";
import "./SidebarBalanceItem.css";
import { ReactComponent as USDFlag } from "../../assets/usd_flag.svg";

interface Props {
  link: string;
  icon: string;
}

const SidebarBalanceItem: React.FC<Props> = ({ link, icon }) => {
  return (
    <div className="navigation-web-sideb-10">
      <div className="label">
        <div className="buttons-logo-flag-usd">
          <USDFlag />
        </div>
        <div className="link-3 label--14px">{link}</div>
      </div>
    </div>
  );
};

export default SidebarBalanceItem;
