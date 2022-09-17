import { Form, Formik, FormikHelpers } from "formik";
import PrimaryInput from "../PrimaryInput";
import IconButton from "../IconButton";
import "./TopNavigation.css";
import { NotificationBell } from "../../assets/NotificationBell";

interface Props {
  screenName: string;
  searchIcon: React.ReactNode;
  img: string;
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
  img,
  handleNavigationSubmit,
}) => {
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

        <div className="img-2" style={{ backgroundImage: `url(${img})` }}></div>
      </div>
    </div>
  );
};

export default TopNavigation;
