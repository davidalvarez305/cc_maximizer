import React from "react";
import SecondaryFooterButton from "../SecondaryFooterButton";
import FooterIcon from "../IconButton";
import "./Footer.css";

interface Props {
  privacyPolicy: string;
  license: string;
  api: string;
  helpCenter: string;
  x2022AllRightsRe: string;
}

const Footer: React.FC<Props> = ({
  privacyPolicy,
  license,
  api,
  helpCenter,
  x2022AllRightsRe,
}) => {
  return (
    <div className="navigation-web-footer-on-light">
      <img
        alt=""
        className="line"
        src="https://anima-uploads.s3.amazonaws.com/projects/631ef96c30c5be89e49afb9c/releases/63206d2ef3e0a49cce9c0cb4/img/line@1x.svg"
      />
      <div className="flex-row">
        <div className="links">
          <div className="links-item x12px--bold">{privacyPolicy}</div>
          <div className="links-item x12px--bold">{license}</div>
          <div className="links-item x12px--bold">{api}</div>
          <div className="links-item x12px--bold">{helpCenter}</div>
          <p className="x2022-all-rights-re x12px--medium">
            {x2022AllRightsRe}
          </p>
        </div>
        <SecondaryFooterButton label={""} icon={""} />
        <FooterIcon className={""}>{'icon'}</FooterIcon>
      </div>
    </div>
  );
};

export default Footer;
