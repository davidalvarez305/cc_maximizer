import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const footerLinks = [
    {
      link: "privacy policy",
      path: "/privacy-policy",
    },
    {
      link: "license",
      path: "/license",
    },
    {
      link: "about",
      path: "/about",
    },
    {
      link: "help",
      path: "/help",
    },
  ];
  const CURRENT_YEAR = new Date().getFullYear();
  return (
    <div className="navigation-web-footer-on-light">
      <img
        alt=""
        className="line"
        src="https://anima-uploads.s3.amazonaws.com/projects/631ef96c30c5be89e49afb9c/releases/63206d2ef3e0a49cce9c0cb4/img/line@1x.svg"
      />
      <div className="flex-row">
        <div className="links">
          {footerLinks.map(({ link, path }) => (
            <Link to={path}>
              <div key={path} className="links-item x12px--bold">
                {link}
              </div>
            </Link>
          ))}
          <p className="x2022-all-rights-re x12px--medium">
            {CURRENT_YEAR + " All Rights Reserved"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
