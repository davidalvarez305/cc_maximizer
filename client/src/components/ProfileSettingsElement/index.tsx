import React from "react";
import "./ProfileSettingsElement.css";
import TextWithHeader from "../TextWithHeader";
import TagElement from "../TagElement";

interface Props {
  icon: React.ReactNode;
  primaryHeader: string;
  subHeader: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  tagText: string;
  isLoading?: boolean;
  loadingText?: string;
}

const ProfileSettingsElement: React.FC<Props> = ({
  icon,
  primaryHeader,
  subHeader,
  handleClick,
  tagText,
  isLoading,
  loadingText,
}) => {
  return (
    <div className={`account-web-item-v2-2 account-web-item-v2-1`}>
      <div className={"options"}>
        <div className="icon-5">{icon}</div>
        <TextWithHeader primaryHeader={primaryHeader} subHeader={subHeader} />
      </div>
      <TagElement
        tag={tagText}
        handleClick={handleClick}
        isLoading={isLoading}
        loadingText={loadingText}
      />
    </div>
  );
};

export default ProfileSettingsElement;
