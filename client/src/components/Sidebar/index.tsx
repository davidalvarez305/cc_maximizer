import React from "react";
import SidebarBalanceItem from "../SidebarElement";
import "./Sidebar.css";
import { CreditCardIcon } from "../../assets/CreditCardIcon";
import { USDFlagIcon } from "../../assets/USDFlagIcon";
import SidebarElement from "../SidebarElement";
import { ReportsIcon } from "../../assets/ReportsIcon";
import { PlusIcon } from "../../assets/PlusIcon";
import { BarsIcon } from "../../assets/BarsIcon";

function Sidebar() {
  const navLinks = [
    {
      icon: <CreditCardIcon />,
      link: "Credit Cards",
    },
    {
      icon: <BarsIcon />,
      link: "Estimates",
    },
    {
      icon: <ReportsIcon />,
      link: "Recommendations",
    },
  ];

  const balances = [
    {
      icon: <USDFlagIcon />,
      link: "100,050.75 USD",
    },
    {
      icon: <USDFlagIcon />,
      link: "2310.40 EUR",
    },
    {
      icon: <USDFlagIcon />,
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
            <SidebarBalanceItem {...link} />
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
        <SidebarElement icon={<PlusIcon />} link={"Create A Budget"} />
      </div>
      <SidebarElement icon={<PlusIcon />} link={"Profile Settings"} />
    </div>
  );
}

export default Sidebar;
