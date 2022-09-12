import React from "react";
import "./SecondaryInput.css";

interface Props {
  fieldTitle: string;
  placeholder: string;
  icon: any;
}

const SecondaryInput: React.FC<Props> = ({
  fieldTitle,
  placeholder,
  icon,
}) => {
  return (
    <div className="forms-primary-select-restingon-light">
      <div className="field-title-1 x12px--bold">{fieldTitle}</div>
      <div className="overlap-group1">
        <div className="placeholder-1 x14px--regular">{placeholder}</div>
        <div className="icon-1">{icon}</div>
      </div>
    </div>
  );
};

export default SecondaryInput;
