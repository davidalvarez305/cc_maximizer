import React from "react";
import "./SignInButton.css";

interface Props {
  children: React.ReactNode;
}

const SignInButton: React.FC<Props> = ({ children }) => {
  return (
    <div className="buttons-label-filled-active-on-light">
      <button type="submit" className="overlap-group2">
        <div className="label label--14px">{children}</div>
      </button>
    </div>
  );
};

export default SignInButton;
