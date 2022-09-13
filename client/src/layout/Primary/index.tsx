import React from "react";
import Sidebar from "../../components/Sidebar";
import TopNavigation from "../../components/TopNavigation";
import SecondaryButton from "../../components/SecondaryButton";
import Footer from "../../components/Footer";
import "./PrimaryLayout.css";

function PrimaryLayout() {
  return (
    <div className="container-center-horizontal">
      <div className="accounts-empty screen">
        <Sidebar />
        <div className="flex-col">
          <TopNavigation
            title={"Yo yo"}
            searchIcon={"Yo yo"}
            typeToSearch={"Yo yo"}
            img={"Yo yo"}
            iconButton={"Yo yo"}
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
            <h1 className="title-1 heading--h1">{"title"}</h1>
            <p className="apply-today-and-star x14px--regular">
              {"applyTodayAndStar"}
            </p>
          </div>
          <SecondaryButton icon={""} label={""} />
          <Footer
            privacyPolicy={"/privacy-policy"}
            license={"/license"}
            api={"/api"}
            helpCenter={"/helpCenter"}
            x2022AllRightsRe={"/x2022AllRightsRe"}
          />
        </div>
      </div>
    </div>
  );
}

export default PrimaryLayout;
