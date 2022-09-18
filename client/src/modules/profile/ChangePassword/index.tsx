import { Form, Formik } from "formik";
import { useNavigate } from "react-router";
import DarkButton from "../../../components/Button";
import PrimaryInput from "../../../components/PrimaryInput";
import PrimaryLayout from "../../../layout/Primary";
import "./ChangePassword.css";

const ChangePassword = () => {
  const navigate = useNavigate();

  function handleSubmit(values: { newPassword: string }) {
    console.log(values);
    navigate("/login");
  }

  return (
    <PrimaryLayout screenName={"Change Password"}>
      <Formik initialValues={{ newPassword: "" }} onSubmit={handleSubmit}>
        <Form>
          <div className="main-container">
            <PrimaryInput label={"New Password"} name={"newPassword"} />
            <DarkButton type="submit">Submit</DarkButton>
          </div>
        </Form>
      </Formik>
    </PrimaryLayout>
  );
};

export default ChangePassword;
