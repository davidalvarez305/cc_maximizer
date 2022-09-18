import React from "react";
import "./ProfileSettingsElement.css";
import TextWithHeader from "../TextWithHeader";
import TagElement from "../TagElement";
import { useNavigate } from "react-router";

interface Props {
  icon: React.ReactNode;
}

const ProfileSettingsElement: React.FC<Props> = ({ icon }) => {
  const navigate = useNavigate();
  return (
    <div className={`account-web-item-v2-2 account-web-item-v2-1`}>
      <div className={"options"}>
        <div className="icon-5">{icon}</div>
        <TextWithHeader
          primaryHeader={"Change Password"}
          subHeader={"Primary Account"}
        />
      </div>
      <TagElement
        tag={"Change"}
        handleClick={() => navigate("/change-password")}
      />
    </div>
  );
};

export default ProfileSettingsElement;
