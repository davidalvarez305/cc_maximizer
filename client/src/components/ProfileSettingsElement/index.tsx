import React from "react";
import "./ProfileSettingsElement.css";
import TextWithHeader from "../TextWithHeader";
import TagElement from "../TagElement";
import { useNavigate } from "react-router";

interface Props {
  icon: React.ReactNode;
  primaryHeader: string;
  subHeader: string;
  path: string;
}

const ProfileSettingsElement: React.FC<Props> = ({
  icon,
  primaryHeader,
  subHeader,
  path,
}) => {
  const navigate = useNavigate();
  return (
    <div className={`account-web-item-v2-2 account-web-item-v2-1`}>
      <div className={"options"}>
        <div className="icon-5">{icon}</div>
        <TextWithHeader primaryHeader={primaryHeader} subHeader={subHeader} />
      </div>
      <TagElement tag={"Change"} handleClick={() => navigate(path)} />
    </div>
  );
};

export default ProfileSettingsElement;
