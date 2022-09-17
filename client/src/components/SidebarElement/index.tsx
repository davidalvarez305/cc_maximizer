import React from "react";
import "./SidebarElement.css";

interface Props {
  link: string;
  icon: React.ReactNode;
}

const SidebarElement: React.FC<Props> = ({ link, icon }) => {
  return (
    <div className="navigation-web-sideb-10">
      <div className="label">
        <div className="buttons-logo-flag-usd">{icon}</div>
        <div className="link-3 label--14px">{link}</div>
      </div>
    </div>
  );
};

export default SidebarElement;
