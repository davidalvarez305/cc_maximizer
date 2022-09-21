import React, { useContext } from "react";
import "./Settings.css";
import { SettingsIcon } from "../../../assets/SettingsIcon";
import ProfileSettingsElement from "../../../components/ProfileSettingsElement";
import PrimaryLayout from "../../../layout/Primary";
import { UserContext } from "../../../context/UserContext";
import { BUCKET_URL, USER_ROUTE } from "../../../constants";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router";
import useFetch from "../../../hooks/useFetch";
import useLoginRequired from "../../../hooks/useLoginRequired";
import { useToast } from "@chakra-ui/react";

const ProfileSettings: React.FC = () => {
  const navigate = useNavigate();
  useLoginRequired();
  const ctx = useContext(UserContext);
  const USER_IMAGE = `${BUCKET_URL}/profile-pictures/${ctx?.user.profile_image}`;
  const { makeRequest, isLoading, error } = useFetch();
  const toast = useToast();

  function handleDeleteProfile() {
    makeRequest(
      {
        url: USER_ROUTE,
        method: "DELETE",
      },
      (res) => {
        ctx?.Logout();
      }
    );
  }

  const settings = [
    {
      icon: <SettingsIcon />,
      primaryHeader: "Change Password",
      subHeader: "Securely",
      handleClick: () => {
        navigate("/change-password");
      },
      tagText: "Change",
    },
    {
      icon: <MdDelete size={22} />,
      primaryHeader: "Delete Account",
      subHeader: "This action is unrecoverable.",
      handleClick: handleDeleteProfile,
      tagText: "Delete",
      isLoading: isLoading,
      loadingText: "Submitting",
    },
    {
      icon: <img className="img-2" src={USER_IMAGE} alt="Me" />,
      primaryHeader: "Change Profile Picture",
      subHeader: "Get a new look",
      handleClick: () => {
        navigate("/profile-picture");
      },
      tagText: "Change",
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
      {error.message.length > 0 &&
        toast({
          title: "Error deleting account.",
          description: error.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        })}
    </PrimaryLayout>
  );
};
export default ProfileSettings;
