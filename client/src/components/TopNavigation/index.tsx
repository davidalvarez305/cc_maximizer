import { Form, Formik, FormikHelpers } from "formik";
import PrimaryInput from "../PrimaryInput";
import IconButton from "../IconButton";
import "./TopNavigation.css";
import { NotificationBell } from "../../assets/NotificationBell";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { BUCKET_URL } from "../../constants";

interface Props {
  screenName: string;
  searchIcon: React.ReactNode;
  handleNavigationSubmit: (
    values: {
      search: string;
    },
    formikHelpers: FormikHelpers<{
      search: string;
    }>
  ) => void;
}

const TopNavigation: React.FC<Props> = ({
  screenName,
  searchIcon,
  handleNavigationSubmit,
}) => {
  const ctx = useContext(UserContext);
  const USER_IMAGE = `${BUCKET_URL}/profile-pictures/${ctx?.user.profile_image}`;
  function NavigationInputField() {
    return (
      <Formik initialValues={{ search: "" }} onSubmit={handleNavigationSubmit}>
        <Form>
          <div className="search-icon">{searchIcon}</div>
          <PrimaryInput
            label={""}
            name={"search"}
            className="type-to-search x12px--medium"
          />
        </Form>
      </Formik>
    );
  }

  return (
    <div className="navigation-web-top-bar-on-light">
      <div className="overlap-group">
        <div className="title-2 heading--h6">{screenName}</div>
        <div className="search">
          <NavigationInputField />
        </div>
        <IconButton>
          <NotificationBell />
        </IconButton>
        <div
          className="img-2"
          style={{ backgroundImage: `url(${USER_IMAGE})` }}
        ></div>
      </div>
    </div>
  );
};

export default TopNavigation;
