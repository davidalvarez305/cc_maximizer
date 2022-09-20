import { Form, Formik } from "formik";
import { useNavigate } from "react-router";
import Button from "../../../components/Button";
import PrimaryInput from "../../../components/PrimaryInput";
import RequestErrorMessage from "../../../components/RequestErrorMessage";
import { USER_ROUTE } from "../../../constants";
import useFetch from "../../../hooks/useFetch";
import PrimaryLayout from "../../../layout/Primary";
import "./ChangePassword.css";

const ChangePassword = () => {
  const navigate = useNavigate();
  const { isLoading, makeRequest, error } = useFetch();

  console.log(error);

  function handleSubmit(values: { newPassword: string }) {
    makeRequest(
      {
        url: USER_ROUTE,
        method: "PUT",
        data: values,
      },
      (res) => {
        console.log(res);
      }
    );
  }

  return (
    <PrimaryLayout screenName={"Change Password"}>
      <Formik initialValues={{ newPassword: "" }} onSubmit={handleSubmit}>
        <Form>
          <div className="main-container">
            <PrimaryInput label={"New Password"} name={"newPassword"} />
            <Button disabled={isLoading} className="Dark" type="submit">
              Submit
            </Button>
            <RequestErrorMessage {...error} />
          </div>
        </Form>
      </Formik>
    </PrimaryLayout>
  );
};

export default ChangePassword;
