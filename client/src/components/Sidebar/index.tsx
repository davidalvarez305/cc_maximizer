import React from "react";
import SidebarNavigation from "../SidebarNavigation";
import SidebarBalanceItem from "../SidebarBalanceItem";
import "./Sidebar.css";

function Sidebar() {
  const navLinks = [
    {
      icon: "credit_card.svg",
      link: "Credit Cards",
    },
    {
      icon: "",
      link: "Link One",
    },
    {
      icon: "",
      link: "Link One",
    },
  ];

  const balances = [
    {
      icon: "usd_flag.svg",
      link: "100,050.75 USD",
    },
    {
      icon: "",
      link: "2310.40 EUR",
    },
    {
      icon: "",
      link: "9455.50 GBP",
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
          <React.Fragment key={link.link}>
            <SidebarNavigation {...link} />
          </React.Fragment>
        ))}
      </div>
      <div className="balance">
        <div className="balances x14px--light">{"Budgets"}</div>
        {balances.map((balance) => (
          <React.Fragment key={balance.link}>
            <SidebarBalanceItem {...balance} />
          </React.Fragment>
        ))}
        <SidebarNavigation icon={""} link={"Create A Budget"} />
      </div>
      <SidebarNavigation icon={""} link={"Profile Settings"} />
    </div>
  );
}

export default Sidebar;
