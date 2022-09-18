import React from "react";
import "./Settings.css";
import { SettingsIcon } from "../../../assets/SettingsIcon";
import ProfileSettingsElement from "../../../components/ProfileSettingsElement";
import PrimaryLayout from "../../../layout/Primary";

const ProfileSettings: React.FC = () => {
  const settings = [
    {
      icon: <SettingsIcon />,
      primaryHeader: "Change Password",
      subHeader: "Securely",
      path: "/change-password",
    },
    {
      icon: (
        <img
          className="img-2"
          src="https://southfloridaathleticclub.s3.amazonaws.com/media/misc/default.webp"
          alt="me"
        />
      ),
      primaryHeader: "Change Profile Picture",
      subHeader: "Get a new look",
      path: "/profile-picture",
    },
  ];

  return (
    <PrimaryLayout screenName="Profile Settings">
      <div className="settings-container">
        {settings.map((setting) => (
          <div key={setting.primaryHeader}>
            <ProfileSettingsElement {...setting} />
          </div>
        ))}
      </div>
    </PrimaryLayout>
  );
};
export default ProfileSettings;
