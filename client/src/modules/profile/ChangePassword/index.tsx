import { Form, Formik } from "formik";
import { useNavigate } from "react-router";
import Button from "../../../components/Button";
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
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Formik>
    </PrimaryLayout>
  );
};

export default ChangePassword;
