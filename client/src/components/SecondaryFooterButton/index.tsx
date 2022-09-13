import React from "react";
import "./SecondaryFooterButton.css";

interface Props {
  label: string;
  icon: string;
}

const SecondaryFooterButton: React.FC<Props> = ({ label, icon }) => {
  return (
    <div className="buttons-label-icon-t">
      <div className="link-6">
        <div className="label-3 label--14px">{label}</div>
        <div className="icon-3 materialiconsoutlined-regular-normal-black-18px">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default SecondaryFooterButton;
