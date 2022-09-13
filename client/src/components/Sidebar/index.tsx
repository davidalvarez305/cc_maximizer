import React from "react";
import SidebarNavigation from "../SidebarNavigation";
import SidebarBalanceItem from "../SidebarBalanceItem";
import "./Sidebar.css";

function Sidebar() {
  const navLinks = [
    {
      icon: "",
      link: "",
      className: "",
    },
  ];

  const balances = [
    {
      icon: "",
      link: "",
    },
  ];

  return (
    <div className="navigation-web-sidebar-menu-on-light">
      <img
        alt=""
        className="element-logo-hidden"
        src="https://anima-uploads.s3.amazonaws.com/projects/631ef96c30c5be89e49afb9c/releases/63206d2ef3e0a49cce9c0cb4/img/-element--logo---hidden@2x.svg"
      />
      <div className="navigation">
        <div className="navigation-1 x14px--light">{"Navigation"}</div>
        {navLinks.map((link) => (
          <React.Fragment key={link.className}>
            <SidebarNavigation {...link} />
          </React.Fragment>
        ))}
      </div>
      <div className="balance">
        <div className="balances x14px--light">{"Balances"}</div>
        {balances.map((balance) => (
          <React.Fragment key={balance.link}>
            <SidebarBalanceItem {...balance} />
          </React.Fragment>
        ))}
        <SidebarNavigation icon={""} link={"Open A Balance"} className={""} />
      </div>
      <SidebarNavigation icon={""} link={"Profile Settings"} className={""} />
    </div>
  );
}

export default Sidebar;
