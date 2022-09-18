import React from "react";
import { SettingsIcon } from "../../../assets/SettingsIcon";
import ProfileSettingsElement from "../../../components/ProfileSettingsElement";
import PrimaryLayout from "../../../layout/Primary";

const ProfileSettings: React.FC = () => {
  return (
    <PrimaryLayout screenName="Profile Settings">
      <ProfileSettingsElement icon={<SettingsIcon />} />
    </PrimaryLayout>
  );
};
export default ProfileSettings;
