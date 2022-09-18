import React from "react";
import RateElement from "../RateElement";
import "./ProfileSettingsElement.css";
import TextWithHeader from "../TextWithHeader";
import TagElement from "../TagElement";
import { DotsIcon } from "../../assets/DotsIcon";

interface Props {
  icon: React.ReactNode;
}

const ProfileSettingsElement: React.FC<Props> = ({ icon }) => {
  return (
    <div className={`account-web-item-v2-2`}>
      <div className="icon-5 materialiconsoutlined-regular-normal-rolling-stone-20px">
        {icon}
      </div>
      <TextWithHeader
        primaryHeader={"Cumulative Deposit"}
        subHeader={"Primary Account"}
      />
      <RateElement blocked={"1.5%"} className={"Unlimited"} />
      <TextWithHeader
        primaryHeader={"Cumulative Deposit"}
        subHeader={"Primary Account"}
      />
      <TextWithHeader
        primaryHeader={"Cumulative Deposit"}
        subHeader={"Primary Account"}
      />
      <TagElement tag={"Today"} />
      <DotsIcon />
    </div>
  );
};

export default ProfileSettingsElement;
