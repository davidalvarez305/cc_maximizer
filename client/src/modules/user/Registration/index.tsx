import { Form, Formik } from "formik";
import React from "react";
import Checkbox from "../../../components/Checkbox";
import SignInButton from "../../../components/SignInButton";
import PrimaryInput from "../../../components/PrimaryInput";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { REGISTER_ROUTE } from "../../../constants";
import RequestErrorMessage from "../../../components/RequestErrorMessage";
import LoginOrRegister from "../LoginOrRegister";

const Register: React.FC = () => {
  const { makeRequest, isLoading, error } = useFetch();

  function handleSubmit(values: { email: string; password: string }) {
    makeRequest(
      {
        url: REGISTER_ROUTE,
        method: "POST",
        data: values,
      },
      (res) => {
        console.log(res.data.data);
      }
    );
  }

  return (
    <LoginOrRegister>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form">
            <PrimaryInput
              label="Email"
              name="email"
              placeholder="name@gmail.com"
            />
            <PrimaryInput
              label="Password"
              name="password"
              placeholder="Password..."
              type="password"
            />
            <div className="flex-row">
              <Checkbox>Remember me</Checkbox>
              <div className="recover-password x12px--bold">
                <Link to={"/forgot-password"}>Forgot Password</Link>
              </div>
            </div>
            <SignInButton disabled={isLoading}>Sign in</SignInButton>
            {error.message.length > 0 && <RequestErrorMessage {...error} />}
          </div>
        </Form>
      </Formik>
    </LoginOrRegister>
  );
};

export default Register;
