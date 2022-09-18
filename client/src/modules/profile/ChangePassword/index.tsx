import { Form, Formik } from "formik";
import PrimaryInput from "../../../components/PrimaryInput";
import PrimaryLayout from "../../../layout/Primary";

const ChangePassword = () => {
  function handleSubmit(values: { newPassword: string }) {
    console.log(values);
  }

  return (
    <PrimaryLayout screenName={"Change Password"}>
      <Formik initialValues={{ newPassword: "" }} onSubmit={handleSubmit}>
        <Form>
          <div>
            <PrimaryInput label={"New Password"} name={"newPassword"} />
          </div>
        </Form>
      </Formik>
    </PrimaryLayout>
  );
};

export default ChangePassword;
