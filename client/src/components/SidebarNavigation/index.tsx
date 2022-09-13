import React from "react";
import "./SidebarNavigation.css";

interface Props {
  icon: string;
  link: string;
  className: string;
}

const SidebarNavigation: React.FC<Props> = ({
  icon,
  link,
  className,
}) => {
  return (
    <div className={`navigation-web-sideb-1 ${className || ""}`}>
      <div className="icon materialiconsoutlined-regular-normal-rolling-stone-22px">
        {icon}
      </div>
      <div className="link-1 lable--14px">{link}</div>
    </div>
  );
};

export default SidebarNavigation;
