import React from "react";
import "./SidebarFlagIcon.css";

interface Props {
  src: string;
}

const SidebarFlagIcon: React.FC<Props> = ({ src }) => {
  return (
    <div
      className="buttons-logo-flag-usd"
      style={{ backgroundImage: `url(${src})` }}
    ></div>
  );
};

export default SidebarFlagIcon;
