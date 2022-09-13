import React from "react";
import "./SignInButton.css";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const SignInButton: React.FC<Props> = ({ children, ...props }) => {
  return (
    <div className="buttons-label-filled-active-on-light">
      <button {...props} type="submit" className="overlap-group2">
        <div className="label label--14px">{children}</div>
      </button>
    </div>
  );
};

export default SignInButton;
