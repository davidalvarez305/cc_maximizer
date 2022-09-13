import React from "react";
import "./UserWrapper.css";
import { Link } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  h1Text: string;
  h1Subtext: string | React.ReactNode;
  bottomTextOne: string;
  bottomLinkText: string;
  bottomLinkDestination: string;
}

const LoginOrRegister: React.FC<Props> = ({
  children,
  h1Text,
  h1Subtext,
  bottomLinkText,
  bottomTextOne,
  bottomLinkDestination,
}) => {
  return (
    <div className="container-center-horizontal">
      <div className="registration-sign-in screen">
        <div className="flex-col">
          <h1 className="title-1 heading--h1">{h1Text}</h1>
          <p className={typeof h1Subtext === "string" ? "enter-your-account-d x14px--regular" : undefined}>{h1Subtext}</p>
          {children}
          <div className="link-1">
            <p className="you-dont-have-an-ac x14px--regular">
              {bottomTextOne}
            </p>
            <div className="create-an-account label--14px">
              <Link to={"/" + bottomLinkDestination}>{bottomLinkText}</Link>
            </div>
          </div>
        </div>
        <div className="overlap-group4">
          <div className="cta">
            <div className="promo">
              <div className="the-latest-financial heading--h4">
                The latest financial insights and analysis to keep you up to
                date and ahead of the curve.
              </div>
              <div className="slider">
                <div className="rectangle"></div>
                <div className="oval"></div>
                <div className="oval"></div>
              </div>
              <div className="waiapi-karaka heading--h6">Waiapi Karaka</div>
              <div className="financial-officer x14px--regular">
                Financial Officer
              </div>
            </div>
          </div>
          <div className="overlap-group3">
            <img
              alt=""
              className="rectangle-1"
              src="https://anima-uploads.s3.amazonaws.com/projects/631ef96c30c5be89e49afb9c/releases/631ef971190c8b852614ea0e/img/rectangle@2x.png"
            />
            <img
              alt=""
              className="widget"
              src="https://anima-uploads.s3.amazonaws.com/projects/631ef96c30c5be89e49afb9c/releases/631ef971190c8b852614ea0e/img/widget@2x.svg"
            />
            <img
              alt=""
              className="widget-copy"
              src="https://anima-uploads.s3.amazonaws.com/projects/631ef96c30c5be89e49afb9c/releases/631ef971190c8b852614ea0e/img/widget-copy@2x.svg"
            />
            <img
              alt=""
              className="widget-1"
              src="https://anima-uploads.s3.amazonaws.com/projects/631ef96c30c5be89e49afb9c/releases/631ef971190c8b852614ea0e/img/widget-1@2x.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginOrRegister;
