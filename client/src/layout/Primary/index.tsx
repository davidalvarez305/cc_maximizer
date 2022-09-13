import React from "react";
import NavigationWebSidebarMenuOnLight from "../NavigationWebSidebarMenuOnLight";
import NavigationWebTopBarOnLight from "../NavigationWebTopBarOnLight";
import ButtonsIconLabelTransparentActiveOn from "../ButtonsIconLabelTransparentActiveOn";
import NavigationWebFooterOnLight from "../NavigationWebFooterOnLight";
import "./PrimaryLayout.css";

function PrimaryLayout(props) {
  const {
    title,
    applyTodayAndStar,
    navigationWebSidebarMenuOnLightProp,
    navigationWebTopBarOnLightProps,
    buttonsIconLabelTransparentActiveOn,
    navigationWebFooterOnLightProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="accounts-empty screen">
        <NavigationWebSidebarMenuOnLight
          {...navigationWebSidebarMenuOnLightProp}
        />
        <div className="flex-col">
          <NavigationWebTopBarOnLight
            title={navigationWebTopBarOnLightProps.title}
            searchIcon={navigationWebTopBarOnLightProps.searchIcon}
            typeToSearch={navigationWebTopBarOnLightProps.typeToSearch}
            img={navigationWebTopBarOnLightProps.img}
            buttonsIconOutlineRestingOnLightPro={
              navigationWebTopBarOnLightProps.buttonsIconOutlineRestingOnLightPro
            }
          />
          <div className="overlap-group1">
            <img
              alt=""
              className="group"
              src="https://anima-uploads.s3.amazonaws.com/projects/631ef96c30c5be89e49afb9c/releases/63206d2ef3e0a49cce9c0cb4/img/group@2x.svg"
            />
            <div className="oval"></div>
            <img
              alt=""
              className="path-1"
              src="https://anima-uploads.s3.amazonaws.com/projects/631ef96c30c5be89e49afb9c/releases/63206d2ef3e0a49cce9c0cb4/img/path@2x.svg"
            />
            <img
              alt=""
              className="group-1"
              src="https://anima-uploads.s3.amazonaws.com/projects/631ef96c30c5be89e49afb9c/releases/63206d2ef3e0a49cce9c0cb4/img/group-1@2x.svg"
            />
            <img
              alt=""
              className="path"
              src="https://anima-uploads.s3.amazonaws.com/projects/631ef96c30c5be89e49afb9c/releases/63206d2ef3e0a49cce9c0cb4/img/path-1@2x.svg"
            />
            <img
              alt=""
              className="path"
              src="https://anima-uploads.s3.amazonaws.com/projects/631ef96c30c5be89e49afb9c/releases/63206d2ef3e0a49cce9c0cb4/img/path-2@2x.svg"
            />
            <div className="oval-1"></div>
            <img
              alt=""
              className="path-2"
              src="https://anima-uploads.s3.amazonaws.com/projects/631ef96c30c5be89e49afb9c/releases/63206d2ef3e0a49cce9c0cb4/img/path-3@2x.svg"
            />
            <img
              alt=""
              className="path-3"
              src="https://anima-uploads.s3.amazonaws.com/projects/631ef96c30c5be89e49afb9c/releases/63206d2ef3e0a49cce9c0cb4/img/path-4@2x.svg"
            />
            <img
              alt=""
              className="path-4"
              src="https://anima-uploads.s3.amazonaws.com/projects/631ef96c30c5be89e49afb9c/releases/63206d2ef3e0a49cce9c0cb4/img/path-5@2x.svg"
            />
            <img
              alt=""
              className="path-5"
              src="https://anima-uploads.s3.amazonaws.com/projects/631ef96c30c5be89e49afb9c/releases/63206d2ef3e0a49cce9c0cb4/img/path-6@2x.svg"
            />
            <img
              alt=""
              className="path-6"
              src="https://anima-uploads.s3.amazonaws.com/projects/631ef96c30c5be89e49afb9c/releases/63206d2ef3e0a49cce9c0cb4/img/path-7@2x.svg"
            />
            <img
              alt=""
              className="shape"
              src="https://anima-uploads.s3.amazonaws.com/projects/631ef96c30c5be89e49afb9c/releases/63206d2ef3e0a49cce9c0cb4/img/shape@2x.svg"
            />
            <img
              alt=""
              className="group-2"
              src="https://anima-uploads.s3.amazonaws.com/projects/631ef96c30c5be89e49afb9c/releases/63206d2ef3e0a49cce9c0cb4/img/group-2@2x.svg"
            />
            <img
              alt=""
              className="group-3"
              src="https://anima-uploads.s3.amazonaws.com/projects/631ef96c30c5be89e49afb9c/releases/63206d2ef3e0a49cce9c0cb4/img/group-3@2x.svg"
            />
            <img
              alt=""
              className="path-7"
              src="https://anima-uploads.s3.amazonaws.com/projects/631ef96c30c5be89e49afb9c/releases/63206d2ef3e0a49cce9c0cb4/img/path-8@2x.svg"
            />
            <img
              alt=""
              className="path-8"
              src="https://anima-uploads.s3.amazonaws.com/projects/631ef96c30c5be89e49afb9c/releases/63206d2ef3e0a49cce9c0cb4/img/path-9@2x.svg"
            />
            <img
              alt=""
              className="group-4"
              src="https://anima-uploads.s3.amazonaws.com/projects/631ef96c30c5be89e49afb9c/releases/63206d2ef3e0a49cce9c0cb4/img/group-4@2x.svg"
            />
            <img
              alt=""
              className="path-9"
              src="https://anima-uploads.s3.amazonaws.com/projects/631ef96c30c5be89e49afb9c/releases/63206d2ef3e0a49cce9c0cb4/img/path-10@2x.svg"
            />
            <img
              alt=""
              className="path-10"
              src="https://anima-uploads.s3.amazonaws.com/projects/631ef96c30c5be89e49afb9c/releases/63206d2ef3e0a49cce9c0cb4/img/path-10@2x.svg"
            />
            <img
              alt=""
              className="path-11"
              src="https://anima-uploads.s3.amazonaws.com/projects/631ef96c30c5be89e49afb9c/releases/63206d2ef3e0a49cce9c0cb4/img/path-12@2x.svg"
            />
          </div>
          <div className="title">
            <h1 className="title-1 heading--h1">{title}</h1>
            <p className="apply-today-and-star x14px--regular">
              {applyTodayAndStar}
            </p>
          </div>
          <ButtonsIconLabelTransparentActiveOn
            text1={buttonsIconLabelTransparentActiveOn.text1}
            lable={buttonsIconLabelTransparentActiveOn.lable}
          />
          <NavigationWebFooterOnLight
            privacyPolicy={navigationWebFooterOnLightProps.privacyPolicy}
            license={navigationWebFooterOnLightProps.license}
            api={navigationWebFooterOnLightProps.api}
            helpCenter={navigationWebFooterOnLightProps.helpCenter}
            x2022AllRightsRe={navigationWebFooterOnLightProps.x2022AllRightsRe}
            buttonsLabelIconTransparentRestingO={
              navigationWebFooterOnLightProps.buttonsLabelIconTransparentRestingO
            }
            buttonsIconOutlineRestingOnLightPro={
              navigationWebFooterOnLightProps.buttonsIconOutlineRestingOnLightPro
            }
          />
        </div>
      </div>
    </div>
  );
}

export default PrimaryLayout;
