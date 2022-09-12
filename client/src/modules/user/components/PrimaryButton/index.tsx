import React from "react";
import "./PrimaryButton.css";

interface Props {
  children: React.ReactNode;
}

const PrimaryButton: React.FC<Props> = ({ children }) => {
  return (
    <div className="buttons-label-filled-active-on-light">
      <div className="overlap-group2">
        <div className="label label--14px">{children}</div>
      </div>
    </div>
  );
};

export default PrimaryButton;
