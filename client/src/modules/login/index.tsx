import React from "react";
import "./globals.css";
import "./styleguide.css";
import "./Login.css";

function Login() {
  return <RegistrationSignIn {...registrationSignInData} />;
}

export default Login;

function RegistrationSignIn(props: any) {
  return (
    <div className="container-center-horizontal">
            <div className="registration-sign-in screen">
              <div className="flex-col">
                <ElementLogoHorizontalOnLight paysa="Paysa" />
                <h1 className="title-1 heading--h1">Sign in</h1>
                <p className="enter-your-account-d x14px--regular">Enter your account details or use QR code</p>
                <div className="form">
                  <FormsPrimarySelectActiveonLight fieldTitle="Email" placeholder="catherine.shaw@gmail.com" icon="" />
                  <div className="flex-row">
                    <FormsGeneralCheckboxRestingonLight>Remember me</FormsGeneralCheckboxRestingonLight>
                    <div className="recover-password x12px--bold">Recover password</div>
                  </div>
                  <ButtonsLabelFilledActiveOnLight>Sing in</ButtonsLabelFilledActiveOnLight>
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
                  <ButtonsIconLabelOutlineRestingOnLig icon="" lable="Log in with QR code" />
                </div>
                <div className="link-1">
                  <p className="you-dont-have-an-ac x14px--regular">You don’t have an account?</p>
                  <div className="create-an-account lable--14px">Create an account</div>
                </div>
              </div>
              <div className="overlap-group4">
                <div className="cta">
                  <div className="promo">
                    <div className="the-latest-financial heading--h4">
                      The latest financial insights and analysis to keep you up to date and ahead of the curve.
                    </div>
                    <div className="slider">
                      <div className="rectangle"></div>
                      <div className="oval"></div>
                      <div className="oval"></div>
                    </div>
                    <div className="waiapi-karaka heading--h6">Waiapi Karaka</div>
                    <div className="financial-officer x14px--regular">Financial Officer</div>
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

function ElementLogoHorizontalOnLight(props: any) {
  const { paysa } = props;

  return (
    <div className="element-logo-horizontal-on-light">
      <img
        className="element-logo-hidden"
        src="https://anima-uploads.s3.amazonaws.com/projects/631ef96c30c5be89e49afb9c/releases/631ef971190c8b852614ea0e/img/-element--logo---hidden@2x.svg"
        alt=""
      />
      <div className="paysa">{paysa}</div>
    </div>
  );
}

function FormsPrimarySelectActiveonLight(props: any) {
  const { fieldTitle, placeholder, icon } = props;

  return (
    <div className="forms-primary-select-activeon-light">
      <div className="field-title x12px--bold">{fieldTitle}</div>
      <div className="overlap-group">
        <div className="placeholder x14px--regular">{placeholder}</div>
        <div className="icon materialiconsoutlined-regular-normal-black-18px">{icon}</div>
      </div>
    </div>
  );
}

function FormsGeneralCheckboxRestingonLight(props: any) {
  const { children } = props;

  return (
    <div className="forms-general-checkbox-restingon-light">
      <div className="rectangle-3"></div>
      <div className="title x12px--bold">{children}</div>
    </div>
  );
}

function ButtonsLabelFilledActiveOnLight(props: any) {
  const { children } = props;

  return (
    <div className="buttons-label-filled-active-on-light">
      <div className="overlap-group2">
        <div className="lable lable--14px">{children}</div>
      </div>
    </div>
  );
}

function ButtonsIconLabelOutlineRestingOnLig(props: any) {
  const { icon, lable } = props;

  return (
    <div className="buttons-icon-label-o">
      <div className="link">
        <div className="icon-2 materialiconsoutlined-regular-normal-black-18px">{icon}</div>
        <p className="lable-1 lable--14px">{lable}</p>
      </div>
    </div>
  );
}

const elementLogoHorizontalOnLightData = {
  paysa: "Paysa",
};

const formsPrimarySelectActiveonLightData = {
  fieldTitle: "Email",
  placeholder: "catherine.shaw@gmail.com",
  icon: "",
};

const formsPrimarySelectRestingonLightData = {
  fieldTitle: "Password",
  placeholder: "Enter your password",
  icon: "",
};

const formsGeneralCheckboxRestingonLightData = {
  children: "Remember me",
};

const buttonsLabelFilledActiveOnLightData = {
  children: "Sing in",
};

const buttonsIconLabelOutlineRestingOnLigData = {
  icon: "",
  lable: "Log in with QR code",
};

const registrationSignInData = {
  title: "Sign in",
  enterYourAccountD: "Enter your account details or use QR code",
  recoverPassword: "Recover password",
  or: "or",
  youDontHaveAnAc: "You don’t have an account?",
  createAnAccount: "Create an account",
  theLatestFinancial:
    "The latest financial insights and analysis to keep you up to date and ahead of the curve.",
  waiapiKaraka: "Waiapi Karaka",
  financialOfficer: "Financial Officer",
  rectangle: "rectangle.png",
  elementLogoHorizontalOnLightProps: elementLogoHorizontalOnLightData,
  formsPrimarySelectActiveonLightProp: formsPrimarySelectActiveonLightData,
  formsPrimarySelectRestingonLightPro: formsPrimarySelectRestingonLightData,
  formsGeneralCheckboxRestingonLightP: formsGeneralCheckboxRestingonLightData,
  buttonsLabelFilledActiveOnLightProp: buttonsLabelFilledActiveOnLightData,
  buttonsIconLabelOutlineRestingOnLig: buttonsIconLabelOutlineRestingOnLigData,
};
