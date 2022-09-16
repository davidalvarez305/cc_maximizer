import React, { useState } from "react";
import "./SidebarNavigation.css";
import { ReactComponent as CreditCard } from "../../assets/credit_card.svg";

interface Props {
  icon: string;
  link: string;
}

const SidebarNavigation: React.FC<Props> = ({ icon, link }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className={`navigation-web-sideb-1`}
    >
      <div className={isActive ? "link" : undefined}>
        <div className="icon-1">
          <CreditCard />
        </div>
        <div className={isActive ? "link-2 label--14px" : "link-1 label--14px"}>
          {link}
        </div>
      </div>
      {isActive && <div className="bg"></div>}
    </div>
  );
};

export default SidebarNavigation;
