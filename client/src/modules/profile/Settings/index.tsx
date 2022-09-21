import React, { useContext } from "react";
import "./Settings.css";
import { SettingsIcon } from "../../../assets/SettingsIcon";
import ProfileSettingsElement from "../../../components/ProfileSettingsElement";
import PrimaryLayout from "../../../layout/Primary";
import { UserContext } from "../../../context/UserContext";
import { BUCKET_URL } from "../../../constants";

const ProfileSettings: React.FC = () => {
  const ctx = useContext(UserContext);
  const USER_IMAGE = `${BUCKET_URL}/profile-pictures/${ctx?.user.profile_image}`;
  const settings = [
    {
      icon: <SettingsIcon />,
      primaryHeader: "Change Password",
      subHeader: "Securely",
      path: "/change-password",
    },
    {
      icon: <img className="img-2" src={USER_IMAGE} alt="Me" />,
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
