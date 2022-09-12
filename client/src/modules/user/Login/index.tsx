import { Form, Formik } from "formik";
import React from "react";
import Checkbox from "../components/Checkbox";
import SignInButton from "../components/SignInButton";
import PrimaryInput from "../components/PrimaryInput";
import SecondaryButton from "../components/SecondaryButton";
import "./Login.css";

function Login() {
  return (
    <div className="container-center-horizontal">
      <div className="registration-sign-in screen">
        <div className="flex-col">
          <h1 className="title-1 heading--h1">Sign in</h1>
          <p className="enter-your-account-d x14px--regular">
            Enter your account details or use QR code
          </p>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => console.log(values)}
          >
            <Form>
              <div className="form">
                <PrimaryInput
                  label="Email"
                  name="email"
                  placeholder="catherine.shaw@gmail.com"
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
                    Recover password
                  </div>
                </div>
                <SignInButton>Sign in</SignInButton>
                <div className="or">
                  <img
                    alt=""
                    className="line-2"
                    src="https://anima-uploads.s3.amazonaws.com/projects/631ef96c30c5be89e49afb9c/releases/631ef971190c8b852614ea0e/img/line-2@2x.svg"
                  />
                  <div className="or-1 x14px--regular">or</div>
                  <img
                    alt=""
                    className="line-2-copy"
                    src="https://anima-uploads.s3.amazonaws.com/projects/631ef96c30c5be89e49afb9c/releases/631ef971190c8b852614ea0e/img/line-2-copy@2x.svg"
                  />
                </div>
                <SecondaryButton icon="" label="Log in with QR code" />
              </div>
            </Form>
          </Formik>
          <div className="link-1">
            <p className="you-dont-have-an-ac x14px--regular">
              You don’t have an account?
            </p>
            <div className="create-an-account label--14px">
              Create an account
            </div>
          </div>
        </div>
        <div className="overlap-group4">
          <div className="cta">
            <div className="promo">
              <div className="the-latest-financial heading--h4">
                The latest financial insights and analysis to keep you up to
                date and ahead of the curve.
              </div>
              <div className="slider">
                <div className="rectangle"></div>
                <div className="oval"></div>
                <div className="oval"></div>
              </div>
              <div className="waiapi-karaka heading--h6">Waiapi Karaka</div>
              <div className="financial-officer x14px--regular">
                Financial Officer
              </div>
            </div>
          </div>
          <div className="overlap-group3">
            <img
              alt=""
              className="rectangle-1"
              src="https://anima-uploads.s3.amazonaws.com/projects/631ef96c30c5be89e49afb9c/releases/631ef971190c8b852614ea0e/img/rectangle@2x.png"
            />
            <img
              alt=""
              className="widget"
              src="https://anima-uploads.s3.amazonaws.com/projects/631ef96c30c5be89e49afb9c/releases/631ef971190c8b852614ea0e/img/widget@2x.svg"
            />
            <img
              alt=""
              className="widget-copy"
              src="https://anima-uploads.s3.amazonaws.com/projects/631ef96c30c5be89e49afb9c/releases/631ef971190c8b852614ea0e/img/widget-copy@2x.svg"
            />
            <img
              alt=""
              className="widget-1"
              src="https://anima-uploads.s3.amazonaws.com/projects/631ef96c30c5be89e49afb9c/releases/631ef971190c8b852614ea0e/img/widget-1@2x.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
